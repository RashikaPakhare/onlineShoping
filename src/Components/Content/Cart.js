// import CartDetails from './CartDetails';
import '../UI/Cart.css'
import { Link } from 'react-router-dom';
const Cart = (props)=>{
    
// console.log(props.cartItems);
    return(
        <div className="cart-container">
            {props.cartItems.map(item => (<div className='carts' id={item.id}>
                <img alt="img..." src={item.image}></img>
                <p>{item.title}</p>
                <span>$ {item.price} </span>
                <span>50% off</span>
                <p>Rating: {item.rating.rate}</p>
                <Link to={`products/${item.id}`}>view details</Link>
            </div>))}
        </div>
    )

}
export default Cart;
