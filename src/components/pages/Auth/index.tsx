import React, {ReactComponentElement} from 'react';
import {HexagonGroup} from '../../molecules/HexagonGroup';
import {AuthTemplate} from '../../templates/AuthTemplate';
import styles from './style.module.scss';

interface AuthPageProps {
}

export const AuthPage = ({}: AuthPageProps) => {
  return (
    <AuthTemplate>
      <div className={styles['auth-page-wrapper']}>
        <HexagonGroup/>
      </div>
    </AuthTemplate>
  );
};