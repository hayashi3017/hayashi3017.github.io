import PostContent, { PostContentProps } from './PostContent'
import PostTOC from './PostTOC'
import styles from './PostView.module.scss'

export type post = {
  main: PostContentProps
  sub: PostToc
}

export type PostToc = {
  toc: string
}

export default function PostView(props: post) {
  console.log(props.sub.toc)
  return (
    <>
      <div className={styles.main}>
        <PostContent data={props.main.data} content={props.main.content} />
      </div>
      {/* tocがない場合は非表示にする */}
      {props.sub.toc.length > '<nav class="toc"><ol class="toc-level toc-level-1"></ol></nav>'.length ? (
        <div className={styles.sub}>
          <PostTOC toc={props.sub.toc} />
        </div>
      ) : (
        ''
      )}
    </>
  )
}
