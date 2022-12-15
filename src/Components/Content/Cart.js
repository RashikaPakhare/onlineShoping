
import '../UI/Cart.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import { Button } from 'react-bootstrap';

const Cart = (props)=>{


  const navigate = useNavigate();
  
// console.log(props.cartItems);
    return(
        <div className="cart-container">
            {props.cartItems.map(item => (<div className='carts' key={item.id}>
                <img alt="img..." src={item.image} onClick={(e) => {navigate(`/product-details/${item.id}`)}}></img>
                <p>{item.title}</p>
                <span>$ {item.price} </span>
                <span>50% off</span>
                {/* <p>Rating: {item.rating.rate}</p> */}
                {/* <Link to={`/products/${item.id}`}>view details</Link> */}
               <div className='cartBtns'>
                  {/* <Link 
                to={`/product-details/${item.id}`}
              
              >
                View Details
              </Link> */}
            
              <Link to={`/products/${item.id}`}>Delete Product</Link>
              <button onClick={(e) =>{navigate('/edit-product', {state: item})}}>Edit Product</button>
          </div>  </div>))}
        </div>
    )

}
export default Cart;
