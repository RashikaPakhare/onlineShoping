
import Cart from '../Components/Content/Cart';
import Footer from '../Components/Footer/Footer';
import Menu from '../Components/Header/Menu';
import Header from '../Components/Header/Header';
import axios from 'axios';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsReceived } from '../redux/productAll';

const HomeScreens = ()=>{

  const productState = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(productState.products);

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
              ,[]);
  // console.log(cartList);
    return (
      <div>
        <Header></Header>
      <Menu></Menu>
      <Cart cartItems={productState.products}></Cart>
      <Footer></Footer>
      </div>
   );
  }
  export default HomeScreens;