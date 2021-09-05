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

export const Navbar = () => {
  const dispatch = useDispatch();
  const [activeRout, setActiveRoute] = useState<string>(UrlHelper.getCurrentRout);
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const cartCount = useSelector((state: RootState) => state.cart.orders).length;
  const service = new AsyncService(dispatch).asyncActionStrategy(ActionsGroup.auth);

  const finalClassNameCart = classNames(
    styles['link-wrapper'],
    styles[`link-wrapper_${cartCount && 'active'}`],
  );

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
        <span className={finalClassNameCart} onClick={() => setActiveRoute('cart')}>
          <span className={styles['cart-count']}>
            {cartCount}
          </span>
          <CustomLink
            preset="nav"
            to="/cart"
            isActive={activeRout === 'cart'}>
            <BiBasket/>
          </CustomLink>
        </span>
        {(user?.email === 'administrator@honey.com') && (
          <span className={styles['link-wrapper']} onClick={() => setActiveRoute('admin')}>
            <CustomLink
              preset="nav"
              to="/admin/products"
              isActive={activeRout === 'admin'}>
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
