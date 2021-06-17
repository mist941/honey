import React, {ReactComponentElement} from 'react';
import {Navbar} from "../../organisms/Navbar";
import styles from './style.module.scss';

interface BaseTemplateProps {
  router: ReactComponentElement<any>;
}

export const BaseTemplate = ({router}: BaseTemplateProps) => {
  return (
    <div className={styles['template-wrapper']}>
      <Navbar/>
      <div>
        {router}
      </div>
    </div>
  )
};