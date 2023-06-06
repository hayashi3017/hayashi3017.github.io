import styles from './PostTOC.module.scss'

export default function PostTOC(props: { toc: string }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.toc }} />
    </div>
  )
}
