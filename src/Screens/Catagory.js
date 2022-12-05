import axios from 'axios';
import Cart from '../Components/Content/Cart';
import Spinner from 'react-bootstrap/Spinner';


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Catagory = () => {
    const [ELeList, setEleList] = useState([]);
    const [loading, setLoad] = useState(true);
    const { catagories } = useParams();

    useEffect(()=>{     
      axios.get(`https://fakestoreapi.com/products/category/${catagories}`).then((response) =>{
       setLoad(false);
        setEleList(response.data)
      })}
              );
//   console.log(ELeList);
    return (
      <div>
      {loading ? <div className="d-flex justify-content-center">  <Spinner variant="primary" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> </div> : (ELeList && (
         <Cart cartItems={ELeList}></Cart>)
      )}
     </div>
   );

}
export default Catagory;