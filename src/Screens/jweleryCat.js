import axios from 'axios';
import Cart from '../Components/Content/Cart';
import Footer from '../Components/Footer/Footer';
import Menu from '../Components/Header/Menu';
import Header from '../Components/Header/Header';
import React, {useState, useEffect} from 'react';
// import {Routes, Route} from 'react-router-dom';

const JweleryCat = ()=>{

    const [JweList, setJweList] = useState([]);

    const baseUrl = "https://fakestoreapi.com/products/category/jewelery";
  
    useEffect(()=>{
      // fetch('https://fakestoreapi.com/products')
      //         .then(res=>res.json())
      //         .then(json=>setCartList(json));}
              
  
      axios.get(baseUrl).then((response) =>{
        setJweList(response.data)
      })}
              ,[]);
  console.log(JweList);
    return (
      <div>
        <Header></Header>
      <Menu></Menu>
      <Cart cartItems={JweList}></Cart>
      <Footer></Footer>
      </div>
   );
  }
  export default JweleryCat;