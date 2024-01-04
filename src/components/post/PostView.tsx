import PostContent, { postContent } from './PostContent'
import PostTOC from './PostTOC'
import styles from './PostView.module.scss'

export interface post {
  main: postContent
  sub: postToc
}

export interface postToc {
  toc: string
}

export default function PostView(props: post) {
  return (
    <>
      <div className={styles.main}>
        <PostContent data={props.main.data} content={props.main.content} />
      </div>
      <div className={styles.sub}>
        <PostTOC toc={props.sub.toc} />
      </div>
    </>
  )
}
