import Link from 'next/link'
import styles from './TextLink.module.scss'

export default function TextLink(props: { pathName: string; url: string }) {
  return (
    <Link href={props.url} className={styles.base}>
      {props.pathName}
    </Link>
  )
}
