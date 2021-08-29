import React, {FC, useState} from 'react';
import styles from './style.module.scss';
import ImageUploading, {ImageListType} from "react-images-uploading";
import classNames from "classnames";
import {Product} from "../../../types/Products";

interface Props {
  submit: (params: any) => void,
  defaultParams?: Product,
}

export const ProductForm: FC<Props> = ({submit, defaultParams}) => {
  const [images, setImages] = useState<ImageListType[]>([]);
  const [name, setName] = useState<string>(defaultParams ? defaultParams.name : '');
  const [cost, setCost] = useState<string>(defaultParams ? defaultParams.cost : '');
  const [amount, setAmount] = useState<string>(defaultParams ? defaultParams.amount : '');
  const [description, setDescription] = useState<string>(defaultParams?.description ? defaultParams.description : '');

  const onChangeImage = (imageList: ImageListType) => setImages(imageList as never[]);

  const sendData = () => {
    submit({
      image: images[0],
      name,
      cost,
      amount,
      description
    })
  }

  return (
    <div className={styles['product-from']}>
      {
        !(defaultParams) && (
          <ImageUploading
            multiple
            value={images}
            onChange={onChangeImage}
            maxNumber={1}
          >
            {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                dragProps
              }) => (
              <div className={styles['upload-image']}>
                {imageList.map((image, index) => (
                  <div key={index} className={styles['image-wrap']}>
                    <img src={image.dataURL} alt="image"/>
                  </div>
                ))}
                <div className={styles['btn-group']}>
                  {
                    imageList.length ?
                      <button onClick={onImageRemoveAll}>Удалить</button> :
                      <button onClick={onImageUpload}{...dragProps}>Добавить изображение</button>
                  }
                </div>
              </div>
            )}
          </ImageUploading>
        )
      }

      <div className={styles['field-wrapper']}>
        <p>Название продукта</p>
        <input
          type="text"
          className={styles['field']}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className={styles['field-wrapper']}>
        <p>Цена одного продукта</p>
        <input
          type="number"
          className={styles['field']}
          value={cost}
          onChange={e => setCost(e.target.value)}
        />
      </div>
      <div className={styles['field-wrapper']}>
        <p>Количество продуктов</p>
        <input
          type="number"
          className={styles['field']}
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </div>
      <div className={styles['field-wrapper']}>
        <p>Описание продукта</p>
        <input
          type="text"
          className={styles['field']}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div className={classNames(styles['btn-group'], styles['right'])} style={{marginBottom: 0}}>
        <button onClick={sendData}>{defaultParams ? 'Изменить' : 'Добавить'}</button>
      </div>
    </div>
  );
};