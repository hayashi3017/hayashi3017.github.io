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
          <Link href={RootRoute.tech.template.rust.path}>Tech</Link>
        </li>
        <li>
          <Link href={RootRoute.blog.template.path}>Blog</Link>
        </li>
      </ul>
    </div>
  )
}
