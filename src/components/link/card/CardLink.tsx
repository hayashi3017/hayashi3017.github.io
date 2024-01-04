import Link from 'next/link'
import styles from './CardLink.module.scss'

interface LinkProps {
  title: string
  url: string
  children?: string
}

export default function CardLink(props: LinkProps) {
  return (
    <>
      <Link href={props.url} className={styles.card}>
        <span className={styles.title}>{props.title}</span>
        <div className={styles.description}>{props.children}</div>
      </Link>
    </>
  )
}
