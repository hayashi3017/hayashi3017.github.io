## posts

記事にしたいmdファイルを入れてください。
ファイル名がパスとして使われるにあたり日本語対応していませんので、ファイル名は英語でお願いします。
ファイル名の重複が許されないということで、idとしても機能します。
例）
`hayashi3017.github.io/src/pages/tech/[category]/rust/posts/memory.md`でメタ情報がbasicの場合、
`/tech/basic/rust/memory`というパスになります。

### mdファイルのメタ情報について

```md
title: 記事のページ内に表示するタイトル。日本語でok
description: 記事のページ内に表示する要約。日本語でok
category: 大まかな分類。パスに使用するため英語にしてください
tags:　記事に付けるタグ。配列で。
postsDate: 投稿日
updateDate: 更新日
```


## TODO

- [ ] シンタックスハイライト
  - remark-highlightはdeplicatedとのことなので、rehype-highlightにせざるを得ない？
  - https://tamalog.szmd.jp/rehype-highlight/ とかかな・・
- [ ] mermaid対応
  - https://github.com/temando/remark-mermaid は古そう
  - https://zenn.dev/south02/articles/f858aedb489e0a
- [ ] mdファイル内のメタ情報に型推論が効くようにする
  - tsファイル中に宣言して書き換えるか
- [ ] サイドバーへ見出し機能
- [ ] タグ機能
  - [ ] 検索機能・画面
- [ ] ページネーション機能
- [ ] 関連記事を表示する機能
- [ ] クリスタで幾何学模様svgを作る
  - [ ] https://launchbadge.com/　みたいにしたい