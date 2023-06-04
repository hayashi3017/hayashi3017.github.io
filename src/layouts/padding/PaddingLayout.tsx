import React from 'react'
import styles from './PaddingLayout.module.scss'

export default function PaddingLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.base}>{props.children}</div>
    </>
  )
}
