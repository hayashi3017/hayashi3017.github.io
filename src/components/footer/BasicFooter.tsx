import Link from 'next/link'
import styles from './BasicFooter.module.scss'
import { route } from '@/constant/route'

export const BasicFooter = () => {
  return (
    <div className={styles.footer_container}>
      <ul>
        <li>
          <Link href={route.root.root.path}>Home</Link>
        </li>
        <li>
          <Link href={route.article.root.path}>Blog</Link>
        </li>
      </ul>
    </div>
  )
}
