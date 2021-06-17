import React, {useState} from 'react';
import styles from './style.module.scss';
import {AiOutlineHome, AiOutlineShop} from 'react-icons/ai';
import {BiBasket} from 'react-icons/bi';
import {FiLogOut} from 'react-icons/fi';
import {CustomLink} from '../../atoms/CustomLink';
import {UrlHelper} from '../../../utils/UrlHelper';

export const Navbar = () => {
  const [activeRout, setActiveRoute] = useState<string>(UrlHelper.getCurrentRout);

  return (
    <div className={styles['navbar-wrapper']}>
        <span className={styles['link-wrapper']} onClick={() => setActiveRoute('')}>
          <CustomLink preset="gradient" to="/">
            <AiOutlineHome/>
          </CustomLink>
        </span>
      <nav className={styles['navigation']}>
        <span className={styles['link-wrapper']} onClick={() => setActiveRoute('shop')}>
          <CustomLink
            preset="nav"
            to="/shop"
            isActive={activeRout === 'shop'}>
            <AiOutlineShop/>
          </CustomLink>
        </span>
        <span className={styles['link-wrapper']} onClick={() => setActiveRoute('basket')}>
          <CustomLink
            preset="nav"
            to="/basket"
            isActive={activeRout === 'basket'}>
            <BiBasket/>
          </CustomLink>
        </span>
      </nav>
      <div>
        <button className={styles['logout']}>
          <FiLogOut/>
        </button>
      </div>
    </div>
  );
};