import React from 'react';
import {PageTemplate} from '../../templates/PageTemplate';
import styles from './style.module.scss';
import {productList} from "../../../helpers/helper";

export const ShopPage = () => {
  return (
    <PageTemplate title='Магазин'>
      <div className={styles['product-list']}>
        {
          productList.map(product => (
            <div className={styles['product']} key={product.id}>
              <div className={styles['img-wrapper']}>
                <img src={product.image} alt=""/>
              </div>
              <p className={styles['name']}>{product.name}</p>
              <p className={styles['cost']}>
                <span>{product.cost}</span> грн
              </p>
              <p className={styles['amount']}>
                В наличи - <span>{product.amount}</span>
              </p>
            </div>
          ))
        }
      </div>
    </PageTemplate>
  );
};
