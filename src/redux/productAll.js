import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name:
    "products",
    initialState:{
        products :[],
        productDetails :null
    },
    //reducer fuction
    reducers: {
        productsReceived : (state, action) =>{
            state.products = action.payload;
        },
    },
});

export const { productsReceived } = productSlice.actions;

export default productSlice.reducer;
