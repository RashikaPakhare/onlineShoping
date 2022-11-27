import Header from "../../Components/Header/Header";
import Menu from "../../Components/Header/Menu";
import Cart from "../../Components/Content/Cart";
import Footer from "../../Components/Footer/Footer";
import React, {useState, useEffect} from "react";
import axios from "axios";

const WomenCat = ()=>{

    const [womenList, setWList] = useState([]);
    const baseUrl = "https://fakestoreapi.com/products/category/women's%20clothing";

    useEffect(()=>{
axios.get(baseUrl).then((response)=>{setWList(response.data)});
    }, []);
    // console.log(womenList);

    return(
        <div>
            <Header></Header>
            <Menu></Menu>
            <Cart cartItems={womenList}></Cart>
            <Footer></Footer>
        </div>
    );

}
export default WomenCat;