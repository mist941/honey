import React, {useEffect, useState} from 'react';
import {PageTemplate} from '../../templates/PageTemplate';
import styles from './style.module.scss';
import {Product} from "../../../types/Products";
import {ProductRepository} from "../../../services/repositories/product.repository";
import {PopUp} from "../../molecules/Modal";
import {ProductForm} from "../../molecules/ProductForm";
import {ProductModal} from "../../molecules/ProductModal";

export const ShopPage = () => {
  const productRepository = new ProductRepository();
  const [list, setList] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [popUp, setPopUp] = useState<boolean>(false);

  useEffect(() => {
    productRepository.getCollection().get().then((res: any[]) => {
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
            <div className={styles['product']} key={product.id} onClick={() => {
              setPopUp(true);
              setCurrentProduct(product);
            }}>
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
        {
          (popUp&& currentProduct!==null) && (
            <PopUp
              isOpen={popUp}
              onClose={() => setPopUp(false)}
              name="Просмотр продукта"
              size={600}
            >
             <ProductModal product={currentProduct}/>
            </PopUp>
          )
        }
      </div>
    </PageTemplate>
  );
};
