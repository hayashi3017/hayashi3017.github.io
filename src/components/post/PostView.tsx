import BreadcrumbsNav from '../navigator/Breadcrumbs'
import PostContent, { postContent } from './PostContent'
import PostTOC from './PostTOC'
import styles from './PostView.module.scss'

export interface post {
  main: postContent
  sub: postToc
  slug: string[]
}

export interface postToc {
  toc: string
}

export default function PostView(props: post) {
  return (
    <>
      <div className={styles.main}>
        <BreadcrumbsNav fragPath={props.slug} />
        <PostContent data={props.main.data} content={props.main.content} />
      </div>
      <div className={styles.sub}>
        <PostTOC toc={props.sub.toc} />
      </div>
    </>
  )
}
