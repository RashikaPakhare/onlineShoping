import {useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CartDetail from "../Components/Content/CartDetail";
import axios from "axios";
import '../Components/UI/CartDetails.css'

const DeleteProduct = ()=>{
    const [product, setProduct] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      axios({
        method: "DELETE",
        baseURL: "https://fakestoreapi.com",
        url: `/products/${id}`,
      }).then((response) => {
        setProduct(response.data);
      });
    }, []);
    console.log("product:", product);
    return (
        
      <div className="body">
        {product && (
         
          <CartDetail cartDetails = {product}></CartDetail>
        )}
      </div>);
}
export default DeleteProduct;