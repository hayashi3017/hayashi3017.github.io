import { ReactNode } from 'react'
import PostOuterLayout from '@/layouts/post/PostOuterLayout'
import { File } from '@/utils/File'
import { Post } from '@/utils/Post'
// https://github.com/highlightjs/highlight.js#es6-modules--import
import 'highlight.js/styles/github-dark.css'

// TODO: .next/serverというディレクトリ構成に依存しているので注意.
const POSTS_DIR = __dirname.split('/.next/server')[0] + process.env.POSTS_DIR
// console.log("POSTS_DIR", POSTS_DIR)

export async function generateStaticParams() {
  const fileFullPaths = File.listFileFullPaths(POSTS_DIR as string)

  const paths = fileFullPaths.map((fileFullPath) => {
    // posts配下のファイルパス
    const postPath = Post.getPath(fileFullPath).replace(/\.md/, '')
    const postPathArray = postPath.split('/')
    return {
      slug: postPathArray,
    }
  })
  // console.log('paths', paths)

  return paths
}

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <PostOuterLayout>{props.children}</PostOuterLayout>
    </>
  )
}
