import React, {AnchorHTMLAttributes, DetailedHTMLProps} from 'react';
import {Link} from 'react-router-dom';
import styles from './style.module.scss';
import classNames from 'classnames';

type Presets = 'animation';

interface HexagonProps {
  preset?: Presets;
}

export const Hexagon = ({preset}: HexagonProps) => {
  const finalClassName = classNames(
    styles['hexagon'],
    styles[`hexagon-${preset}`],
  );

  return (
    <div className={styles['hexagon']}>
      <span/>
    </div>
  );
};