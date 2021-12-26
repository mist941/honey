import React, {FC, useState} from 'react';
import styles from './style.module.scss';
import {Product} from "../../../types/Products";
import {useDispatch} from "react-redux";
import {addProduct} from "../../../store/cart";

interface Props {
  product: Product;
  onClose: () => void;
}

export const ProductModal: FC<Props> = ({product, onClose}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);

  const addProductToCart = () => {
    dispatch(addProduct({
      count,
      product: product,
    }));
    onClose();
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
        <p className={styles['amount']}>
          <span className={styles['control']} onClick={() => setCount(count > 1 ? count - 1 : 1)}>
            -
          </span>
          <span className={styles['value']}>{count}</span>
          <span className={styles['control']}
                onClick={() => setCount(count < Number(product.amount) ? count + 1 : Number(product.amount))}>
            +
          </span>
        </p>
        <button className={styles['btn']} onClick={() => addProductToCart()}>Добавить в корзину</button>
      </div>
    </>
  );
};