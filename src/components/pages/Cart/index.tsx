import React, {useEffect, useState} from 'react';
import {PageTemplate} from '../../templates/PageTemplate';
import {selectedProducts} from "../../../helpers/helper";
import {Product} from "../../../types/Products";
import styles from './style.module.scss';
import {SelectedProductList} from "../../molecules/SelectedProductList";
import {ByForm} from "../../molecules/ByForm";

export const CartPage = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(selectedProducts);
  }, [])

  return (
    <PageTemplate title='Корзина'>
      <div className={styles['cart-wrapper']}>
        <SelectedProductList productList={products}/>
        <ByForm/>
      </div>
    </PageTemplate>
  );
};
