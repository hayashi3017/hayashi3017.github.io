---
title: "Rust Core Libraryを読む -Part1"
description: ""
category: "programing language"
tags: ["rust", "basic", "std"]
postsDate: "2023/9/26"
updateDate: "2023/9/26"
---


## 概要
RustのCore Libraryを読んで理解を深めていきます。

手当たり次第に、手短にまとめていきます。

## Derefトレイト
[core::ops::Deref](https://doc.rust-lang.org/nightly/core/ops/trait.Deref.html)

　Derefトレイトでは参照解決演算子の動作を指定できます。
以下の`Selector`構造体ではDerefトレイトを実装して`self.elements[self.current]`を返しています。

```rust
struct Selector<T> {
    elements: Vec<T>,
    current: usize,
}

impl<T> Deref for Selector<T> {
    type Target = T;
    fn deref(&self) -> &T {
      &self.elements[self.current]
    }
}

impl<T> DerefMut for Selector<T> {
    fn deref_mut(&mut self) -> &mut T {
        &mut self.elements[self.current]
    }
}

fn main() {
    let mut s = Selector {
        elements: vec!['x', 'y', 'z'],
        current: 2,
    };
    assert_eq!(*s, 'z');
}
```

Defefトレイトを持つ型はコンパイラによって暗黙的に参照解決されるようになります。これを参照解決型変換 ([Deref coercions](https://doc.rust-lang.org/nightly/core/ops/trait.Deref.html#more-on-deref-coercion))と呼びます。

以下では`Selector<char>`型である`s`で`is_alphabetic()`メソッドを呼び出していますが、Derefトレイトを実装しているので参照解決型変換が行われています。
コンパイラのイメージ
1. Selector<char>型にis_alphabetic()メソッドが実装されているか確認する　→　実装されていない
2. Selector<char>型にDerefトレイトが実装されているか確認する　→　実装されている
3. Selector<char>.deref()の結果であるchar型にis_alphabetic()メソッドが実装されているか確認する →　実装されている
4. Selector<char>型をchar型とみなして扱う

```rust
fn main() {
    let mut s = Selector {
        elements: vec!['x', 'y', 'z'],
        current: 2,
    };
    assert!(s.is_alphabetic());
}

```

なお、型制約を満たすためには参照解決型変換が行われません。
以下の`show_it()`ではSelector<&str>型から&str型への参照解決型変換が行われますが、`show_it_generic<T: Display>()`では行われません。
この理由は`show_it_generic()`の引数にトレイト境界でDisplayトレイトの実装が指定されているためです。
このように型制約がある場合は暗黙的な変換が行われないため、Derefトレイトを実装したといっても型制約をすり抜けてしまうようなことがないということですね。

```rust
fn main() {
    let s2 = Selector {
        elements: vec!["good", "bad", "ugly"],
        current: 2,
    };
    fn show_it(thing: &str) {
        println!("{}", thing);
    }
    // 型の不整合を解決するために参照解決型変換が行われる
    show_it(&s2);

    fn show_it_generic<T: Display>(thing: T) {
        println!("{}", thing);
    }

    show_it_generic(&s2);　// 型パラメータの制約を満たすためには参照解決型変換が行われないためエラー
    // 回避方法: 明示的に参照解決する
    show_it_generic(&*s2);
    // 回避方法: 型キャストする
    show_it_generic(&s2 as &str);
}
```

## DerefMutトレイト
[core::ops::DerefMut](https://doc.rust-lang.org/nightly/core/ops/trait.DerefMut.html)

既に登場していますが、Derefの可変参照版と考えて良さそうです。以下使用ケースあり。

- 代入先に使われる場合
- 参照先に対する可変参照が要求される場合

ちなみにDerefトレイトのサブトレイトになっています。


```rust
pub trait DerefMut: Deref {
    // Required method
    fn deref_mut(&mut self) -> &mut Self::Target;
}
```

## まとめ

Deref, DerefMutトレイトはスマートポインタ型（Box, Rc, Arc）を実装するために設計されています。
また、よく参照型で使う型 ([T], str)の所有あり型 (Vec<T>, String)を実装するのにも適しています。

ただし、Target型のメソッドを自動的に使えるようにするために使用してはいけません。
コンパイラによる暗黙的な変換は強力である一方、デバッグを困難にする可能性があるため、設計に準じて適切な実装を意識する必要がありそうです。
外部クレートで見かけたときはどのような意図で実装しているのか意識してみたいと思います、ここから設計思想の一端を垣間見ることもできそうですね。

## 感想

コンパイラの参照解決のような部分にもトレイトという形でRustプログラマが振る舞いを定義できる。
冗長な記述を省略する機能を提供しつつ、型制約は犠牲にしない。
これがRustらしさなのでしょうか・・？
