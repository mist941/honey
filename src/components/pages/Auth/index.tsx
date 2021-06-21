import React, {ReactComponentElement} from 'react';
import {Hexagon} from '../../atoms/Hexagon';
import {TitlePage} from '../../atoms/TitlePage';
import { HexagonGroup } from '../../molecules/HexagonGroup';
import {Navbar} from '../../organisms/Navbar';
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