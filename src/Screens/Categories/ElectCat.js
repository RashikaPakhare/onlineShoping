import axios from 'axios';

import Cart from '../../Components/Content/Cart';
import Footer from '../../Components/Footer/Footer';
import Menu from '../../Components/Header/Menu';
import Header from '../../Components/Header/Header';
import React, { useState, useEffect } from 'react';

const ElectCat = () => {
    const [ELeList, setEleList] = useState([]);

    const baseUrl = "https://fakestoreapi.com/products/category/electronics";
  
    useEffect(()=>{
      // fetch('https://fakestoreapi.com/products')
      //         .then(res=>res.json())
      //         .then(json=>setCartList(json));}
              
  
      axios.get(baseUrl).then((response) =>{
        setEleList(response.data)
      })}
              ,[]);
  // console.log(ELeList);
    return (
      <div>
        <Header></Header>
      <Menu></Menu>
  
      <Cart cartItems={ELeList}></Cart>

      <Footer></Footer>
      </div>
   );

}
export default ElectCat;