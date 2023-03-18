import styles from './BasicHeader.module.scss';

export interface HeaderProps {
  title: string;
}

export const BasicHeader = (props: HeaderProps) => {
  return (
    <div className={styles.header_container}>
      <span className={styles.logo}>ロゴ</span>
      <span className={styles.title}>{props.title}</span>
    </div>
  );
};
