import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  image: '',
  productData: {},
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.image = action.payload;
    },

    reset: (state) => {
      state.productData = {};
      state.image = '';
    },

    setProducts: (state, action) => {
      state.products.push({
        ...action.payload,
        id:
          state.products.length > 0
            ? state.products[state.products.length - 1].id + 1
            : 1,
      });
    },

    deleteProduct: (state, action) => {
      const deletedProduct = state.products.filter(
        (product) => product.id !== action.payload
      );

      state.products = deletedProduct;
    },

    addProductData: (state, action) => {
      state.productData = { ...state.productData, ...action.payload };
    },
  },
});

export const { addImage, reset, setProducts, deleteProduct, addProductData } =
  counterSlice.actions;

export default counterSlice.reducer;
