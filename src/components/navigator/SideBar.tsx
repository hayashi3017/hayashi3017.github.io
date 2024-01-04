import ListLink from '../link/list/ListLink'
import styles from './SideBar.module.scss'
import { allRoutes } from '@/constant/route'

// 現在パスをもらって、それを中心に表示するだけ
export default function SideBar(props: { path: string }) {
  return (
    <ul className={styles.parent}>
      {allRoutes.map((route) => {
        return (
          <li
            key={route.path}
            className={
              route.path === props.path ? `${styles.child} ${styles.target}` : `${styles.child}`
            }
          >
            <ListLink title={route.name} url={route.path} />
          </li>
        )
      })}
    </ul>
  )
}
