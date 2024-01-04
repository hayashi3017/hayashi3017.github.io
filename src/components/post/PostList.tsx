import Link from 'next/link'
import styles from './PostList.module.scss'

type PostListProps = {
  title: string
  description: string
  category: string
  tags: string[]
  postsDate: string
  updateDate: string
}

export default function PostList(postData: PostListProps[]) {
  return (
    <ul>
      {postData.map((data) => (
        <li key={data.title}>
          <Link href={'/'}>{data.title}</Link>
        </li>
      ))}
    </ul>
  )
}
