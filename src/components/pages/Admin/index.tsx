import React from 'react';
import {PageTemplate} from '../../templates/PageTemplate';
import {SubNavbar} from '../../organisms/SubNavbar';
import styles from './style.module.scss';
import {Route} from 'react-router-dom';
import router from '../../../router';

export const AdminPage = () => {
  const adminRouters = router.filter(router => router.path === '/admin')[0].sub ?? [];
  return (
    <PageTemplate title="Панель управления">
      <div className={styles['admin-wrapper']}>
        <SubNavbar/>
        {adminRouters.map((rout, index) => (
          <Route key={index} path={rout.path}>
            {rout.component}
          </Route>
        ))}
      </div>
    </PageTemplate>
  );
};
