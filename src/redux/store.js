import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productAll'

export default configureStore({
  reducer: {
    products: productReducer,
  },
});