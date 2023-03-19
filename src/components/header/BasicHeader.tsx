import styles from './BasicHeader.module.scss'

export interface HeaderProps {
  title: string
}

export const BasicHeader = (props: HeaderProps) => {
  return (
    <div className={styles.header_container}>
      <i className={styles.logo}><img src='/next.svg' alt='tag'></img></i>
      <span className={styles.title}>{props.title}</span>
    </div>
  )
}
