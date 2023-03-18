import styles from './BasicFooter.module.scss'

export const BasicFooter = () => {
  return (
    <div className={styles.footer_container}>
      <ul>
        <li>help</li>
        <li>about</li>
        <li>faq</li>
        <li>copy right</li>
      </ul>
    </div>
  )
}
