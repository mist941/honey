import React, {PropsWithChildren} from 'react';
import styles from './style.module.scss';

interface AuthTemplateProps {
}

export const AuthTemplate = ({children}: PropsWithChildren<AuthTemplateProps>) => {
  return (
    <div className={styles['template-auth-wrapper']}>
      {children}
    </div>
  );
};
