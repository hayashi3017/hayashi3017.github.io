import { ReactNode } from 'react'
import { File } from '@/utils/File'
import { Post } from '@/utils/Post'

export async function generateStaticParams() {
  const fileFullPaths = File.listFileFullPaths(process.env.POSTS_DIR as string)

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
  return <>{props.children}</>
}
