import React, { useState} from 'react';
import {AiFillFacebook, AiFillGoogleCircle} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {useDispatch} from 'react-redux';
import {login} from '../../../../store/auth';
import styles from '../style.module.scss';

interface LoginFormProps {
  changePage: () => void;
}

export const LoginForm = ({changePage}: LoginFormProps) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submit = () => {
    dispatch(login({email, password, provider: 'email'}));
  };

  return (
    <div className={styles['container_form']}>
      <div className={styles['form-box']}>
        <div className={styles['header-form']}>
          <BiUserCircle color="#EA7C69" size={140}/>
        </div>
        <div className={styles['body-form']}>
          <div className={styles['form-wrapper']}>
            <input
              type="text"
              className={styles['input']}
              placeholder="Email"
              onChange={event => setEmail(event.currentTarget.value)}
            />
            <input
              type="password"
              className={styles['input']}
              placeholder="Password"
              onChange={event => setPassword(event.currentTarget.value)}
            />
            <button className={styles['btn-submit']} onClick={() => submit()}>Войти</button>
          </div>
          <button className={styles['change-page']} onClick={changePage}>
            Зарегестрироваться
          </button>
          <div className={styles['social-ways']}>
            <button className={styles['social-method-btn']}>
              <AiFillGoogleCircle size={50}/>
            </button>
            <button className={styles['social-method-btn']}>
              <AiFillFacebook size={50}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


