import { ReactNode } from 'react'
import { File } from '@/utils/File'
import { Post } from '@/utils/Post'

// TODO: .next/serverというディレクトリ構成に依存しているので注意.
const POSTS_DIR = __dirname.replace('.next/server', 'src') + '/posts'

export async function generateStaticParams() {
  const fileFullPaths = File.listFileFullPaths(POSTS_DIR)

  const paths = fileFullPaths.map((fileFullPath) => {
    // posts配下のファイルパス
    const postPath = Post.getPath(fileFullPath).replace(/\.md/, '')
    const postPathArray = postPath.split('/')
    return {
      slug: postPathArray,
    }
  })
  console.log('paths', paths)

  return paths
}

export default function Layout(props: { children: ReactNode }) {
  return <>{props.children}</>
}
