import CartDetail from "../Components/Content/CartDetail";
import '../Components/UI/CartDetails.css'
import React, { useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import {useSelector, useDispatch} from 'react-redux';
import { productsDetailsReceived } from '../redux/productAll';

const ProductDetails = ()=>{
  // const [product, setProduct] = useState(null);
 
  const productsDetails = useSelector((state) => state.products.productDetails);
  const dispatch = useDispatch();
  const [loading, setLoad] = useState(true);
 

  // console.log(productDetails.products.productDetails);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`,
    ).then((response) => {
      // setProduct(response.data);
      setLoad(false);
      dispatch(productsDetailsReceived(response.data));
  // console.log("details", response.data);
    }).catch(console.log("network error"));
  }, []);

  return (
      
    <div>
      {loading ? <div className="d-flex justify-content-center">  <Spinner variant="primary" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> </div> : (productsDetails && (
        <CartDetail cartDetails = {productsDetails}></CartDetail>)
      )}
    </div>
  );
}

export default ProductDetails;