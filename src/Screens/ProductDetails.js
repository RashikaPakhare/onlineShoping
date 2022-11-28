import CartDetail from "../Components/Content/CartDetail";
import '../Components/UI/CartDetails.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: `/products/${id}`,
    }).then((response) => {
      setProduct(response.data);
    });
  });
  console.log("product:", product);
  return (
      
    <div>
      {product && (
        
        <CartDetail cartDetails = {product}></CartDetail>
      )}
    </div>
  );
}

export default ProductDetails;