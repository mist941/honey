import React from 'react';
import styles from './style.module.scss';
import {SubPage} from "../../templates/SubPage";
import {BiTrash} from "react-icons/bi";
import {Order} from "../../../types/Order";
import {useDispatch} from "react-redux";
import {changeProduct, removeProduct} from "../../../store/cart";

interface Props {
  orderList: Order[],
}

export const SelectedProductList = ({orderList}: Props) => {
  const dispatch = useDispatch();

  const change = (count: number, id: string) => {
    if (count > 0) {
      dispatch(changeProduct({newCount: count, productId: id}));
    }
  };

  return (
    <SubPage title='Ваши покупки'>
      <div className={styles['products-list']}>
        {
          orderList.map(order => {
            const {product, count} = order;
            return (
              <div className={styles['single-product']} key={product.id}>
                <div className={styles['img-wrap']}>
                  <img src={product.image} alt=''/>
                </div>
                <div className={styles['product-info']}>
                  <p className={styles['name']}>{product.name}</p>
                  <p><span className={styles['total-cost']}>{Number(product.cost) * count}</span>грн</p>
                  <p className={styles['amount']}>
                    <span className={styles['control']} onClick={() => change(count - 1, product.id || '')}>
                      -
                    </span>
                    <span className={styles['value']}>{count}</span>
                    <span className={styles['control']} onClick={() => change(count + 1, product.id || '')}>
                      +
                    </span>
                  </p>
                </div>
                <div className={styles['actions']}>
                  <button className={styles['delete']} onClick={() => dispatch(removeProduct(product.id))}>
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
