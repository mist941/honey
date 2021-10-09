import React, {useState} from 'react';
import styles from './style.module.scss';
import {Hexagon} from '../../atoms/Hexagon';

export const HexagonGroup = () => {

  return (
    <div className={styles['hexagon-group']}>
      <Hexagon/>
      <Hexagon/>
      <Hexagon/>
      <Hexagon/>
      <Hexagon/>
    </div>
  );
};