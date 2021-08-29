import React, {useEffect, useState} from 'react';
import {PageTemplate} from '../../templates/PageTemplate';
import styles from './style.module.scss';
import {Product} from "../../../types/Products";
import {ProductRepository} from "../../../services/repositories/product.repository";

export const ShopPage = () => {
  const productRepository = new ProductRepository();
  const [list, setList] = useState<Product[]>([]);

  useEffect(() => {
    productRepository.getCollection().get().then(res => {
      let preparedList: any = [];
      res.forEach((doc) => {
        preparedList.push({...doc.data(), id: doc.id});
      });
      setList(preparedList);
    });
  }, []);

  return (
    <PageTemplate title='Магазин'>
      <div className={styles['product-list']}>
        {
          list.map(product => (
            <div className={styles['product']} key={product.id}>
              <div className={styles['img-wrapper']}>
                <img src={product.image} alt=""/>
              </div>
              <div>
                <p className={styles['name']}>{product.name}</p>
                <p className={styles['cost']}>
                  <span>{product.cost}</span> грн
                </p>
                <p className={styles['amount']}>
                  В наличи - <span>{product.amount}</span>
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </PageTemplate>
  );
};
