import React, {FC, useState} from 'react';
import styles from './style.module.scss';
import {Product} from "../../../types/Products";
import {useDispatch} from "react-redux";
import {addProduct} from "../../../store/cart";

interface Props {
  product: Product;
}

export const ProductModal: FC<Props> = ({product}) => {
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addProduct({
      count: 1,
      product: product,
    }))
  }
  return (
    <>
      <div className={styles['product-info']}>
        <div className={styles['img-wrapper']}>
          <img src={product.image} alt=""/>
        </div>
        <div>
          <p className={styles['name']}>{product.name}</p>
          <p className={styles['description']}>{product.description}</p>
          <div className={styles['values']}>
            <p className={styles['cost']}>
              <span>{product.cost}</span> грн
            </p>
            <p className={styles['amount']}>
              В наличи - <span>{product.amount}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles['btnWrap']}>
        <button className={styles['btn']} onClick={() => addProductToCart()}>Купить</button>
      </div>
    </>
  );
};