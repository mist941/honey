import React from 'react';
import {AuthPage} from './components/pages/Auth';
import {AdminPage} from './components/pages/Admin';
import {CartPage} from './components/pages/Cart';
import {ShopPage} from './components/pages/Shop';
import {ProductManagement} from "./components/molecules/ProductManagement";
import {OrdersManagement} from "./components/molecules/OrdersManagement";

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
        component: <ProductManagement/>,
      },
      {
        path: '/admin/orders',
        component: <OrdersManagement/>,
      },
    ],
  },
];

export default router;
