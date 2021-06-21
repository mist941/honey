import React from 'react';
import {AuthPage} from './components/pages/Auth';

const router = [
  {
    path: '/',
    component: (
      <div>
        Home Page
      </div>
    ),
  },
  {
    path: '/shop',
    component: (
      <div>
        Shop Page
      </div>
    ),
  },
  {
    path: '/basket',
    component: (
      <div>
        Basket Page
      </div>
    ),
  },
  {
    path: '/auth',
    component: <AuthPage/>,
  },
];

export default router;