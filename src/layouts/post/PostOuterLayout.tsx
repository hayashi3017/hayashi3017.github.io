import { ReactNode } from 'react'
import styles from './PostOuterLayout.module.scss'

export default function PostOuterLayout(props: { children: ReactNode }) {
  return <div className={styles.layout_container}>{props.children}</div>
}
