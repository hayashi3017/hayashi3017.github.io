import styles from './PostView.module.scss'

export interface post {
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

export default function PostView(props: post) {
  return (
    <div>
      <h1>{props.data.category}</h1>
      <h2>{props.data.title}</h2>
      <p>{props.data.postsDate}</p>
      <p>{props.data.updateDate}</p>
      <p>{props.data.description}</p>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  )
}
