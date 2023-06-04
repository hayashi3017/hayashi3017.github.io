import ButtonLink from '../link/button/ButtonLink'
import styles from './Breadcrumbs.module.scss'
import { Url } from '@/utils/Url'

export default function BreadcrumbsNav(props: { fragPath: string[] }) {
  // URLパスのフラグメントに対応するURLパスの配列を取得
  const resolver = Url.getUrlPath(props.fragPath, '/blog')

  return (
    <ul className={styles.parent}>
      {props.fragPath.map((path, index) => (
        <li key={index} className={styles.child}>
          <span> {'>'} </span>
          <ButtonLink pathName={path} url={resolver[index]} />
        </li>
      ))}
    </ul>
  )
}
