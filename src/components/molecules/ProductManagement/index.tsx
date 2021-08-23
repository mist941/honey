import React from 'react';
import styles from './style.module.scss';
import {SubPage} from "../../templates/SubPage";
import {productList} from "../../../helpers/helper";
import productImage from '../../../assets/image/product-image.png';

export const ProductManagement = () => {
  return (
    <SubPage title='Products Management'>
      <div className={styles['products-management']}>
        {
          productList.map(product => (
            <div className={styles['product']} key={product.id}>
              <img src={productImage} alt=''/>
              <p className={styles['product-name']}>{product.name}</p>
              <p className={styles['product-info']}>UAH {product.cost} * {product.amount} Bowls</p>
              <div className={styles['btn-group']}>
                <button className={styles['btn']}>
                  Edit
                </button>
                <button className={styles['btn']}>
                  Delete
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </SubPage>
  );
};