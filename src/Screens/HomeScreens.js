
import Cart from '../Components/Content/Cart';

import axios from 'axios';
import React, {useEffect} from 'react';
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
      })}
              );
  // console.log(cartList);
    return (
      <div>
    
      <Cart cartItems={productState.products}></Cart>

      </div>
   );
  }
  export default HomeScreens;