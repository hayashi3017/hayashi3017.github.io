---
title: "Rust Lifetime"
description: "basic syntax of rust"
category: "programing language"
tags: ["rust", "basic"]
postsDate: ""
updateDate: ""
---

## ローカル変数の借用


ローカル変数の参照を借用して、その変数のスコープの外に持ち出すことはできない
```rust
fn main() {
  let r;
  {
    let x = 1;
    r = &x;
  }
  assert_eq!(*r, 1);  // error
}
```




## 基本

- Rustコンパイラはすべての参照型に対して生存期間を割り当てる
- 生存期間は型の一部であり実行時の表現はない


## 制約

- 参照の生存期間は変数の生存期間を包含すること



