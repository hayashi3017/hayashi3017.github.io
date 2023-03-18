import styles from './BasicContent.module.scss';
import { ReactNode } from 'react';

export interface onlyChildProps {
  children: ReactNode;
}

export const BasicContent = (props: onlyChildProps) => {
  return <div className={styles.content_container}>{props.children}</div>;
};
