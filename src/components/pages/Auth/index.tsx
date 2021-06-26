import React, {ReactComponentElement} from 'react';
import { LoginForm } from '../../molecules/AuthGroup';
import {HexagonGroup} from '../../molecules/HexagonGroup';
import {AuthTemplate} from '../../templates/AuthTemplate';
import styles from './style.module.scss';

interface AuthPageProps {
}

export const AuthPage = ({}: AuthPageProps) => {
  return (
    <AuthTemplate>
      <div className={styles['auth-page-wrapper']}>
        {/*<HexagonGroup/>*/}
        <LoginForm/>
      </div>
    </AuthTemplate>
  );
};
