import Link from 'next/link'
import styles from './BasicFooter.module.scss'
import { RootRoute } from '@/routes/RootRoute'

export const BasicFooter = () => {
  return (
    <div className={styles.footer_container}>
      <ul>
        <li>
          <Link href={RootRoute.root.path}>Home</Link>
        </li>
        <li>
          <Link href={RootRoute.blog.root.path}>Blog</Link>
        </li>
      </ul>
    </div>
  )
}
