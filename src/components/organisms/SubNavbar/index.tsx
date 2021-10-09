import React, {useState} from 'react';
import styles from './style.module.scss';
import {SubLink} from '../../atoms/SubLink';

export const SubNavbar = () => {
  const [activeRout, setActiveRoute] = useState<string>();

  return (
    <div className={styles['sub-navbar-wrapper']}>
      <span onClick={() => setActiveRoute('products')}>
        <SubLink isActive={activeRout === 'products'} to={'products'}>Products</SubLink>
      </span>
      <span onClick={() => setActiveRoute('orders')}>
        <SubLink isActive={activeRout === 'orders'} to={'orders'}>Orders</SubLink>
      </span>
    </div>
  );
};
