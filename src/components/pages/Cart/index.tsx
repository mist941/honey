import React, {useEffect, useState} from 'react';
import {PageTemplate} from '../../templates/PageTemplate';
import styles from './style.module.scss';
import {SelectedProductList} from "../../molecules/SelectedProductList";
import {ByForm} from "../../molecules/ByForm";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

export const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.orders);
  return (
    <PageTemplate title='Корзина'>
      <div className={styles['cart-wrapper']}>
        <SelectedProductList orderList={cart}/>
        <ByForm orderList={cart}/>
      </div>
    </PageTemplate>
  );
};
