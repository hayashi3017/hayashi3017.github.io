import { Children, ReactNode } from 'react'
import styles from './PostInnerLayout.module.scss'

// レイアウトを指定するためのコンポーネント
// TODO: children.mapの実装について
export default function PostInnerLayout(props: { children: ReactNode }) {
  return Children.map(props.children, (child, index) => {
    return (
      <>
        {index === 0 ? (
          <div className={styles.main}>{child}</div>
        ) : (
          <div className={styles.sub}>{child}</div>
        )}
      </>
    )
  })
}
