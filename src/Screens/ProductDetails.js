import { useEffect } from "react";
import CartDetail from "../Components/Content/CartDetail";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios({
            method: "GET",
            baseURL: "https://fakestoreapi.com",
            url: `/products/${id}`
        }).then((response) => {
            setProduct(response.data)
        })
    }
        , []);

    return (
        <div>
            {product && (
                <CartDetail cartDetails = {product}></CartDetail>
            )}
        </div>
    )
}
export default ProductDetails;