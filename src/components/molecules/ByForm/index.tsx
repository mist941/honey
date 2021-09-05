import React, {useState} from 'react';
import styles from './style.module.scss';
import {SubPage} from "../../templates/SubPage";
import {Order} from "../../../types/Order";

interface Props {
  orderList: Order[],
}

export const ByForm = ({orderList}: Props) => {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const getAllSum = () => {
    if (!orderList.length) return 0;

    return orderList
      .map(order => order.count * Number(order.product.cost))
      .reduce((acc: number, current: number) => acc + current);
  }

  return (
    <SubPage title='Обработка заказа'>
      <p className={styles['all-sum']}>Общая сум: <span>{getAllSum()}</span> грн</p>
      <div className={styles['field-wrapper']}>
        <p>Имя:</p>
        <input
          type="text"
          className={styles['field']}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className={styles['field-wrapper']}>
        <p>Номер телефона:</p>
        <input
          type="number"
          className={styles['field']}
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </div>
    </SubPage>
  );
};
