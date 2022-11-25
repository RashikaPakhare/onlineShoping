
import Cart from '../Components/Content/Cart';
import Footer from '../Components/Footer/Footer';
import Menu from '../Components/Header/Menu';
import Header from '../Components/Header/Header';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import {Routes, Route} from 'react-router-dom';

const HomeScreens = ()=>{

    const [cartList, setCartList] = useState([]);

    const baseUrl = "https://fakestoreapi.com/products";
  
    useEffect(()=>{
      // fetch('https://fakestoreapi.com/products')
      //         .then(res=>res.json())
      //         .then(json=>setCartList(json));}
              
  
      axios.get(baseUrl).then((response) =>{
        setCartList(response.data)
      })}
              ,[]);
  // console.log(cartList);
    return (
      <div>
        <Header></Header>
      <Menu></Menu>
      <Cart cartItems={cartList}></Cart>
      <Footer></Footer>
      </div>
   );
  }
  export default HomeScreens;