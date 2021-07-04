import React from 'react';
import {AuthPage} from './components/pages/Auth';
import {AdminPage} from './components/pages/Admin';
import {CartPage} from './components/pages/Cart';
import {ShopPage} from './components/pages/Shop';

const router = [
  {
    path: '/shop',
    component: <ShopPage/>,
  },
  {
    path: '/cart',
    component: <CartPage/>,
  },
  {
    path: '/auth',
    component: <AuthPage/>,
  },
  {
    path: '/admin',
    component: <AdminPage/>,
    sub: [
      {
        path: '/admin/products',
        component: (
          <div>
            Products
          </div>
        ),
      },
      {
        path: '/admin/orders',
        component: (
          <div>
            Orders
          </div>
        ),
      },
    ],
  },
];

export default router;
