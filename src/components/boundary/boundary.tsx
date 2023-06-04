import styles from '@/components/boundary/boundary.module.scss'

const Boundary = (props: { children: React.ReactNode }) => {
  return <div className={styles.border}>{props.children}</div>
}

export default Boundary
