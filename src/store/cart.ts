import {createSlice} from '@reduxjs/toolkit';
import {Order} from "../types/Order";

interface State {
  orders: Order[];
}

export const orderSlice = createSlice({
  name: 'order',
  initialState: <State>{
    orders: [],
  },
  reducers: {
    addProduct: (state, action) => {
      if (!state.orders.find(order => order.product.id === action.payload.product.id)) {
        state.orders = [...state.orders, action.payload];
      }
    },
    removeProduct: (state, action) => {
      state.orders = state.orders.filter(order => order.product.id !== action.payload)
    },
    changeProduct: (state, action) => {
      state.orders = state.orders.map(order => {
        if (action.payload.productId === order.product.id) {
          return {...order, count: action.payload.newCount}
        }
        return order;
      })
    },
    clearCart: (state, action) => {
      state.orders = [];
    },
  },
});

export const {addProduct, removeProduct, changeProduct} = orderSlice.actions;

export default orderSlice.reducer;
