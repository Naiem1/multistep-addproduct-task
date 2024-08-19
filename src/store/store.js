import { configureStore } from '@reduxjs/toolkit';
import productReducer from './featrue/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
