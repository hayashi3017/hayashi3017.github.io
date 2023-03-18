import { ReactNode } from 'react'
import styles from './BasicContent.module.scss'

export interface onlyChildProps {
  children: ReactNode
}

export const BasicContent = (props: onlyChildProps) => {
  return <div className={styles.content_container}>{props.children}</div>
}
