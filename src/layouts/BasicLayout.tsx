import styles from './BasicLayout.module.scss';
import { ReactNode } from 'react';
import { BasicFooter } from '@/components/footer/BasicFooter';
import { BasicHeader } from '@/components/header/BasicHeader';

export interface BasicLayoutProps{
  header: {
    title: string;
  },
  children: ReactNode;
}
export const BasicLayout = (props: BasicLayoutProps) => {
  return (
    <div className={styles.layout_container}>
      <BasicHeader title={props.header.title} />
      {props.children}
      <BasicFooter />
    </div>
  );
};
