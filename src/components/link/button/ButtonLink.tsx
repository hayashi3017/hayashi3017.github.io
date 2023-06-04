import Link from 'next/link'
import styles from './ButtonLink.module.scss'

export default function ButtonLink(props: { pathName: string; url: string }) {
  return (
    <Link href={props.url} className={styles.base}>
      {props.pathName}
    </Link>
  )
}
