import React, {useEffect, useState} from 'react';
import styles from './style.module.scss';
import {SubPage} from "../../templates/SubPage";
import {OrderRepository} from "../../../services/repositories/order-repository";


export const OrdersManagement = () => {
  const ordersRepository = new OrderRepository();
  const [list, setList] = useState<any[]>([]);

  const loadOrders = () => {
    ordersRepository.getCollection().get().then(res => {
      let preparedList: any = [];
      res.forEach((doc) => {
        preparedList.push({...doc.data(), id: doc.id});
      });
      setList(preparedList);
    });
  }

  useEffect(() => {
    loadOrders();
  }, []);

  const getTotalCount = (id: string) => {
    return list.find(l => l.id === id).orders.map((o: any) => o.count * o.product.cost).reduce((p: any, c: any) => p + c);
  }
  return (
    <SubPage title='Orders Management'>
      <div className={styles['orders-management']}>
        {
          list.map((order, index) => (
            <div className={styles['order']} key={order.id}>
              <div className={styles['header']}>
                <p>ID: <span>{++index}</span></p>
                <p>Name: <span>{order.name}</span></p>
                <p>Phone: <span>{order.phoneNumber}</span></p>
                <p>Total cost: <span>{getTotalCount(order.id)}</span></p>
              </div>
              <div className={styles['products']}>
                <p>Products:</p>
                {order.orders.map((o: any, index: number) => (
                  <div className={styles['product']} key={index}>
                    <p className={styles['name']}>Name: {o.product.name}</p>
                    <p className={styles['cost']}>Cost: {o.product.cost}</p>
                    <p className={styles['amount']}>Amount: {o.product.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </SubPage>
  );
};