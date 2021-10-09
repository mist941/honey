import React, {useEffect, useState} from 'react';
import styles from './style.module.scss';
import {SubPage} from "../../templates/SubPage";
import {Product} from "../../../types/Products";
import {ProductRepository} from "../../../services/repositories/product.repository";
import {PopUp} from "../Modal";
import {ProductForm} from "../ProductForm";
import firebase from "firebase/app";

export const ProductManagement = () => {
  const productRepository = new ProductRepository();
  const [list, setList] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [popUp, setPopUp] = useState<string>('');

  const loadProducts = () => {
    productRepository.getCollection().get().then((res: any[]) => {
      let preparedList: any = [];
      res.forEach((doc) => {
        preparedList.push({...doc.data(), id: doc.id});
      });
      setList(preparedList);
    });
  }

  useEffect(() => {
    loadProducts();
  }, []);


  const addNewProduct = (product: any) => {
    const ref = firebase.storage().ref().child(product.image.file.name);
    ref.put(product.image.file).then(() => {
      ref.getDownloadURL().then(url => {
        productRepository.create({...product, image: url}).then(() => {
          loadProducts();
          setPopUp('');
        });
      });
    });
  }
  const updateProduct = (product: any) => {
    delete product.image;
    if (currentProduct?.id) {
      productRepository.update(currentProduct.id, product).then(() => {
        loadProducts();
        setPopUp('');
      });
    }
  }
  const deleteProduct = (id?: string) => {
    productRepository.delete(id).then(() => loadProducts());
  }

  return (
    <SubPage
      title='Products Management'
      action={() => setPopUp('new')}
      actionName="Add New"
    >
      <div className={styles['products-management']}>
        {
          list.map(product => (
            <div className={styles['product']} key={product.id}>
              <div className={styles['img-wrap']}>
                <img src={product.image} alt=''/>
              </div>
              <p className={styles['product-name']}>{product.name}</p>
              <p className={styles['product-info']}>UAH {product.cost} * {product.amount} Bowls</p>
              <div className={styles['btn-group']}>
                <button className={styles['btn']} onClick={() => {
                  setCurrentProduct(product);
                  setPopUp('edit');
                }}>
                  Edit
                </button>
                <button className={styles['btn']} onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        }
      </div>
      <PopUp isOpen={popUp === 'new'} onClose={() => setPopUp('')} name="Добавление товара">
        <ProductForm submit={addNewProduct}/>
      </PopUp>
      {
        currentProduct !== null && (
          <PopUp
            isOpen={popUp === 'edit'}
            onClose={() => setPopUp('')}
            name="Изменение товара"
          >
            <ProductForm submit={updateProduct} defaultParams={currentProduct}/>
          </PopUp>
        )
      }
    </SubPage>
  );
};