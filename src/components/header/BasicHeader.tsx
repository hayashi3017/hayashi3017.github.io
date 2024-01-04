import styles from './BasicHeader.module.scss'

type HeaderProps = {
  title: string
}

export const BasicHeader = (props: HeaderProps) => {
  return (
    <div className={styles.header_container}>
      <span className={styles.title}>{props.title}</span>
    </div>
  )
}
