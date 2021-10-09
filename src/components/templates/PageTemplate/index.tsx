import React, {PropsWithChildren} from 'react';
import styles from './style.module.scss';

interface PageTemplateProps {
  title?: string;
}

export const PageTemplate = ({children, title}: PropsWithChildren<PageTemplateProps>) => {
  return (
    <div className={styles['template-page-wrapper']}>
      <h2 className={styles['title']}>{title}</h2>
      {children}
    </div>
  );
};
