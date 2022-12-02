import CartDetail from "../Components/Content/CartDetail";
import '../Components/UI/CartDetails.css'
import React, { useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { productsDetailsReceived } from '../redux/productAll';

const ProductDetails = ()=>{
  // const [product, setProduct] = useState(null);
 
  const productsDetails = useSelector((state) => state.products.productDetails);
  const dispatch = useDispatch();
 

  // console.log(productDetails.products.productDetails);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`,
    ).then((response) => {
      // setProduct(response.data);
      dispatch(productsDetailsReceived(response.date));
  console.log("details", response.data);
    });
  });
  console.log("product:", productsDetails);
  return (
      
    <div>
      {productsDetails && (
        
        <CartDetail cartDetails = {productsDetails}></CartDetail>
      )}
    </div>
  );
}

export default ProductDetails;