import styles from './PostContent.module.scss'

export interface postContent {
  data: postData
  content: string
}

export interface postData {
  title: string
  description: string
  category: string
  tags: string[]
  postsDate: string
  updateDate: string
}

export default function PostContent(props: postContent) {
  return (
    <div className={styles.main}>
      <h1>{props.data.title}</h1>
      <p>
        posted:{props.data.postsDate}, updated: {props.data.updateDate}
      </p>
      <p>category: {props.data.category}</p>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  )
}
