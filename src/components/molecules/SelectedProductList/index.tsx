import React from 'react';
import styles from './style.module.scss';
import {SubPage} from "../../templates/SubPage";
import {SelectedProducts} from "../../../types/Products";
import {BiTrash} from "react-icons/all";

interface Props {
  productList: SelectedProducts[],
}

export const SelectedProductList = ({productList}: Props) => {

  return (
    <SubPage title='Ваши покупки'>
      <div className={styles['products-list']}>
        {
          productList.map(product => {
            return (
              <div className={styles['single-product']} key={product.id}>
                <div className={styles['img-wrap']}>
                  <img src={product.miniImage} alt=''/>
                </div>
                <div className={styles['product-info']}>
                  <p className={styles['name']}>{product.name}</p>
                  <p><span className={styles['total-cost']}>{product.cost * product.amount}</span>грн</p>
                  <p className={styles['amount']}>{product.amount}</p>

                </div>
                <div className={styles['actions']}>
                  <button className={styles['delete']}>
                    <BiTrash size={30} color='#EA7C69'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </SubPage>
  );
};
