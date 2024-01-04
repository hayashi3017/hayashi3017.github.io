'use client'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import styles from './BasicLayout.module.scss'
import { BasicFooter } from '@/components/footer/BasicFooter'
import { BasicHeader } from '@/components/header/BasicHeader'
import SideBar from '@/components/navigator/SideBar'

export interface BasicLayoutProps {
  header: {
    title: string
  }
  children: ReactNode
}
export const BasicLayout = (props: BasicLayoutProps) => {
  const pathName = usePathname()
  return (
    <div className={styles.layout_container}>
      <SideBar path={pathName} />
      <BasicHeader title={props.header.title} />
      {props.children}
    </div>
  )
}
