import React, { useState} from 'react';
import {AuthForms} from '../../../types/Auth';
import {LoginForm} from '../../molecules/AuthGroup';
import {RegisterForm} from '../../molecules/AuthGroup';
import {AuthTemplate} from '../../templates/AuthTemplate';
import styles from './style.module.scss';

export const AuthPage = () => {
  const [currentForm, setCurrentForm] = useState<AuthForms>(AuthForms.login);

  const renderActualForm = () => {
    if (currentForm === AuthForms.login) {
      return <LoginForm changePage={() => setCurrentForm(AuthForms.register)}/>;
    }

    return <RegisterForm changePage={() => setCurrentForm(AuthForms.login)}/>;
  };

  return (
    <AuthTemplate>
      <div className={styles['auth-page-wrapper']}>
        {renderActualForm()}
      </div>
    </AuthTemplate>
  );
};
