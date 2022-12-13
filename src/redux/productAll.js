import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name:
    "products",
    initialState:{
        products :[],
        productDetails :null,
        category : [],
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
        categoryProductsReceuived : (state, action) =>{
            state.category = action.payload;   
        },
    },
});

export const { productsReceived, productsDetailsReceived, addProduct, categoryProductsReceuived } = productSlice.actions;

export default productSlice.reducer;
