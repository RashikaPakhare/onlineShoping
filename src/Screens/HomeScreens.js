
import Cart from '../Components/Content/Cart';

import axios from 'axios';
import React, {useEffect} from 'react';
import MultipleItems from '../Components/Content/slider';
import { useSelector, useDispatch } from 'react-redux';
import { productsReceived } from '../redux/productAll';

const HomeScreens = ()=>{

  const productState = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // console.log(productState.products);

    // const [cartList, setCartList] = useState([]);

    const baseUrl = "https://fakestoreapi.com/products";
  
    useEffect(()=>{
      // fetch('https://fakestoreapi.com/products')
      //         .then(res=>res.json())
      //         .then(json=>setCartList(json));}
              
  
      axios.get(baseUrl).then((response) =>{
        // setCartList(response.data)
        dispatch(productsReceived(response.data))
      })
    },[]);
  // console.log(cartList);

  const theme = localStorage.getItem("theme");
  
    return (
      <div className={`${theme === 'light'? 'light' : 'dark'} `}>
        <MultipleItems></MultipleItems>
      <Cart cartItems={productState.products}></Cart>

      </div>
   );
  }
  export default HomeScreens;