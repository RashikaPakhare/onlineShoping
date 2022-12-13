import axios from 'axios';
import Cart from '../Components/Content/Cart';
import Spinner from 'react-bootstrap/Spinner';
import { categoryProductsReceuived } from '../redux/productAll';
import { useDispatch, useSelector } from 'react-redux';


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Catagory = () => {
    const ELeList = useSelector((state) => state.products.category)
   const dispatch = useDispatch();
    const [loading, setLoad] = useState(true);
    const { catagories } = useParams();

    useEffect(()=>{     
      axios.get(`https://fakestoreapi.com/products/category/${catagories}`).then((response) =>{
         console.log("API Called");
       dispatch(categoryProductsReceuived(response.data));
       setLoad(false);
      })
      // .catch(console.log("network error"))
    }, [] );
//   console.log(ELeList);
const theme = localStorage.getItem("theme");
    return (
      <div className={`${theme === 'light'? 'light' : 'dark'} `}> 
      {loading ? <div className="d-flex justify-content-center">  <Spinner variant="primary" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> </div> : (ELeList && (
         <Cart cartItems={ELeList}></Cart>)
      )}
     </div>
   );

}
export default Catagory;