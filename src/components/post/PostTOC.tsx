import styles from './PostTOC.module.scss'

export default function PostTOC(props: { toc: string }) {
  return (
    <div className={styles.main}>
      <div dangerouslySetInnerHTML={{ __html: props.toc }} />
    </div>
  )
}
