import React, {useState} from 'react';
import styles from './style.module.scss';
import {AiOutlineHome, AiOutlineShop} from 'react-icons/ai';
import {BiBasket} from 'react-icons/bi';
import {FiLogOut} from 'react-icons/fi';
import {CustomLink} from '../../atoms/CustomLink';
import {UrlHelper} from '../../../utils/UrlHelper';
import {RiAdminFill} from 'react-icons/all';

export const Navbar = () => {
  const [activeRout, setActiveRoute] = useState<string>(UrlHelper.getCurrentRout);

  return (
    <div className={styles['navbar-wrapper']}>
        <span className={styles['link-wrapper']} onClick={() => setActiveRoute('')}>
          <CustomLink isOriginalLink={true} preset="gradient" to="https://honey-landing-84128.web.app/">
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
        <span className={styles['link-wrapper']} onClick={() => setActiveRoute('cart')}>
          <CustomLink
            preset="nav"
            to="/cart"
            isActive={activeRout === 'cart'}>
            <BiBasket/>
          </CustomLink>
        </span>
        <span className={styles['link-wrapper']} onClick={() => setActiveRoute('admin')}>
          <CustomLink
            preset="nav"
            to="/admin"
            isActive={activeRout === 'admin'}>
            <RiAdminFill/>
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
