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
            // console.log("payload:", action.payload);
            state.productDetails = action.payload;
        },
        addProduct : (state, action) =>{
            state.productDetails = action.payload;
            state.products = [...state.products, action.payload];
            console.log("payload:", state.products);
        },
    },
});

export const { productsReceived, productsDetailsReceived, addProduct } = productSlice.actions;

export default productSlice.reducer;
