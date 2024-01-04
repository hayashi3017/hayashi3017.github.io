import Link from 'next/link'
import styles from './ListLink.module.scss'

interface LinkProps {
  title: string
  url: string
}

export default function ListLink(props: LinkProps) {
  return (
    <>
      <Link href={props.url} className={styles.item}>
        <span className={styles.title}>{props.title}</span>
      </Link>
    </>
  )
}
