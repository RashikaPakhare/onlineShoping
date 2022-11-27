import axios from 'axios';

import Cart from '../../Components/Content/Cart';
import Footer from '../../Components/Footer/Footer';
import Menu from '../../Components/Header/Menu';
import Header from '../../Components/Header/Header';
import React, {useState, useEffect} from 'react';
// import {Routes, Route} from 'react-router-dom';

const MenCat = ()=>{

    const [menList, setMenList] = useState([]);

    const baseUrl = "https://fakestoreapi.com/products/category/men's clothing";
  
    useEffect(()=>{
      // fetch('https://fakestoreapi.com/products')
      //         .then(res=>res.json())
      //         .then(json=>setCartList(json));}
              
  
      axios.get(baseUrl).then((response) =>{
        setMenList(response.data)
      })}
              ,[]);
  // console.log(menList);
    return (
      <div>
        <Header></Header>
      <Menu></Menu>
   
      <Cart cartItems={menList}></Cart>
      
      <Footer></Footer>
      </div>
   );
  }
  export default MenCat;