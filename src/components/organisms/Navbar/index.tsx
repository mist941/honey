import React, {useEffect, useState} from 'react';
import styles from './style.module.scss';
import {AiOutlineHome, AiOutlineShop} from 'react-icons/ai';
import {BiBasket} from 'react-icons/bi';
import {FiLogOut} from 'react-icons/fi';
import {CustomLink} from '../../atoms/CustomLink';
import {UrlHelper} from '../../../utils/UrlHelper';
import {RiAdminFill} from 'react-icons/all';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import classNames from "classnames";
import {AsyncService} from "../../../store/asyncActions/inedx";
import {ActionsGroup} from "../../../store/asyncActions/types";
import {useLocation} from "react-router-dom";

export const Navbar = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const cartCount = useSelector((state: RootState) => state.cart.orders).length;
  const service = new AsyncService(dispatch).asyncActionStrategy(ActionsGroup.auth);

  const finalClassNameCart = classNames(
    styles['link-wrapper'],
    styles[`link-wrapper_${cartCount && 'active'}`],
  );

  return (
    <div className={styles['navbar-wrapper']}>
        <span className={styles['link-wrapper']}>
          <CustomLink isOriginalLink={true} preset="gradient" to="https://honey-landing-84128.web.app/">
            <AiOutlineHome/>
          </CustomLink>
        </span>
      <nav className={styles['navigation']}>
        <span className={styles['link-wrapper']}>
          <CustomLink
            preset="nav"
            to="/shop"
            isActive={location.pathname === '/shop'}>
            <AiOutlineShop/>
          </CustomLink>
        </span>
        <span className={finalClassNameCart}>
          <span className={styles['cart-count']}>
            {cartCount}
          </span>
          <CustomLink
            preset="nav"
            to="/cart"
            isActive={location.pathname === '/cart'}>
            <BiBasket/>
          </CustomLink>
        </span>
        {(user?.email === 'administrator@honey.com') && (
          <span className={styles['link-wrapper']}>
            <CustomLink
              preset="nav"
              to="/admin/products"
              isActive={location.pathname === '/admin'}>
            <RiAdminFill/>
          </CustomLink>
        </span>
        )}
      </nav>
      <div>
        {
          user && (
            <button className={styles['logout']} onClick={() => service.logoutAction()}>
              <FiLogOut/>
            </button>
          )
        }
      </div>
    </div>
  );
};
