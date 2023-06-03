import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { BasicContent } from '@/components/content/BasicContent'
import { BasicLayout } from '@/layouts/BasicLayout'
import '@/styles/globals.scss'
import { File } from '@/utils/File'
import { Post } from '@/utils/Post'

// TODO: .next/serverというディレクトリ構成に依存しているので注意.
// const POSTS_DIR = __dirname.replace('.next/server', 'src') + '/posts'

// export async function generateStaticParams() {
//   const fileFullPaths = File.listFileFullPaths(POSTS_DIR)

//   const paths = fileFullPaths.map((fileFullPath) => {
//     // posts配下のファイルパス
//     const postPath = Post.getPath(fileFullPath).replace(/\.md/, '')
//     const postPathArray = postPath.split('/')
//     return {
//       slug: postPathArray,
//     }
//   })
//   console.log('paths', paths)

//   return paths
// }

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <BasicLayout header={{ title: 'ようこそ' }}>
        <BasicContent>{props.children}</BasicContent>
      </BasicLayout>
    </>
  )
}
