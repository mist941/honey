import React, {AnchorHTMLAttributes, DetailedHTMLProps} from 'react';
import {Link} from 'react-router-dom';
import styles from './style.module.scss';

interface CustomLinkProps {
  titleText: string;
}

export const TitlePage = ({titleText}: CustomLinkProps) => <h1 className={styles['title']}>{titleText}</h1>;