import { ReactNode } from 'react'
import styles from './Split2Layout.module.scss'
import { BasicHeader } from '@/components/header/BasicHeader'

export interface Split2LayoutProps {
  header: {
    title: string
  }
  children: ReactNode
}
export const Split2Layout = (props: Split2LayoutProps) => {
  return (
    <div className={styles.layout_container}>
      <BasicHeader title={props.header.title} />
      {props.children}
    </div>
  )
}
