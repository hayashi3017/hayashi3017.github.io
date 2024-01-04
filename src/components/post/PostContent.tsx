import styles from './PostContent.module.scss'

export type PostContentProps = {
  data: PostData
  content: string
}

export type PostData = {
  title: string
  description: string
  category: string
  tags: string[]
  postsDate: string
  updateDate: string
}

export default function PostContent(props: PostContentProps) {
  return (
    <div className={styles.main}>
      <h1>{props.data.title}</h1>
      <p className={styles.metadata}>
        posted:{props.data.postsDate}, updated: {props.data.updateDate}
      </p>
      <p className={styles.metadata}>category: {props.data.category}</p>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  )
}
