import React, {PropsWithChildren} from 'react';
import styles from './style.module.scss';

interface PageTemplateProps {
  title?: string;
  actionName?: string;
  action?: () => void;
}

export const SubPage = ({children, title, action, actionName}: PropsWithChildren<PageTemplateProps>) => {
  return (
    <div className={styles['subpage-wrapper']}>
      <div className={styles['header']}>
        <h2 className={styles['title']}>{title}</h2>
        {action && (
          <button className={styles['action']} onClick={action}>
            {actionName}
          </button>
        )}
      </div>
      {children}
    </div>
  );
};
