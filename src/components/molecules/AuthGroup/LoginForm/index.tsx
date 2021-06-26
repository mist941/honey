import React, {ReactComponentElement} from 'react';
import {AiFillFacebook, AiFillGoogleCircle} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import styles from '../style.module.scss';

interface LoginFormProps {
}

export const LoginForm = ({}: LoginFormProps) => {
  return (
    <div className={styles['container_form']}>
      <div className={styles['form-box']}>
        <div className={styles['header-form']}>
          <BiUserCircle color="#EA7C69" size={140}/>
        </div>
        <div className={styles['body-form']}>
          <form className={styles['form-wrapper']}>
            <input type="text" className={styles['input']} placeholder="Username"/>
            <input type="text" className={styles['input']} placeholder="Password"/>
            <button type="submit" className={styles['btn-submit']}>LOGIN</button>
          </form>
          <div className={styles['social-ways']}>
            <button className={styles['social-method-btn']}>
              <AiFillGoogleCircle size={60}/>
            </button>
            <button className={styles['social-method-btn']}>
              <AiFillFacebook size={60}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


