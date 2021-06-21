import React, {PropsWithChildren, ReactComponentElement} from 'react';
import {Navbar} from '../../organisms/Navbar';
import styles from './style.module.scss';

interface AuthTemplateProps {
  title?: ReactComponentElement<any>;
}

export const AuthTemplate = ({children, title}: PropsWithChildren<AuthTemplateProps>) => {
  return (
    <div className={styles['template-auth-wrapper']}>
      {title}
      {children}
    </div>
  );
};