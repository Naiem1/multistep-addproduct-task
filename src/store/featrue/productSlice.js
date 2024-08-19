import { SatelliteAlt } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  productDetails: {},
  inventoryDetails: {},
  image: '',
  productData: {},
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productDetails = action.payload;
    },
    addInventory: (state, action) => {
      state.inventoryDetails = action.payload;
    },
    addImage: (state, action) => {
      state.image = action.payload;
    },

    reset: (state) => {
      state.productDetails = {};
      state.inventoryDetails = {};
      state.image = '';
    },

    setProducts: (state, action) => {
      state.products.push(action.payload);
    },

    deleteProduct: (state, action) => {
      const deletedProduct = state.products.filter(
        (product) => !state.products.includes(action.payload)
      );

      state.products = deletedProduct;
    },

    addProductData: (state, action) => {
      console.log(action.payload.image)
      state.productData = { ...state.productData, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  addInventory,
  addImage,
  reset,
  setProducts,
  deleteProduct,
  addProductData,
} = counterSlice.actions;

export default counterSlice.reducer;
