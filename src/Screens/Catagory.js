import axios from 'axios';
import Cart from '../Components/Content/Cart';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Catagory = () => {
    const [ELeList, setEleList] = useState([]);
    const { catagories } = useParams();
    
    useEffect(()=>{     
      axios.get(`https://fakestoreapi.com/products/category/${catagories}`).then((response) =>{
        setEleList(response.data)
      })}
              );
  console.log(ELeList);
    return (
      <Cart cartItems={ELeList}></Cart>
   );

}
export default Catagory;