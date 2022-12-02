import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name:
    "products",
    initialState:{
        products :[],
        productDetails :null,
    },
    //reducer fuction
    reducers: {
        productsReceived : (state, action) =>{
            state.products = action.payload;
            // console.log(state, action);
        },
        productsDetailsReceived : (state, action) =>{
            console.log("payload:", action.payload);
            state.productDetails = action.payload;
        },
    },
});

export const { productsReceived, productsDetailsReceived } = productSlice.actions;

export default productSlice.reducer;
