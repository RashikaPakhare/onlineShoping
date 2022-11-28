import '../UI/CartDetails.css'
const CartDetail = (props) =>{
    const details = props.cartDetails;

    return (
        <div className='body'>
        <div className='cards'>
            <div className='imgBox'><img src={details.image}></img><br></br>
            <button className='cartBtn b1'><i className="fa-solid fa-cart-shopping"></i> Add To Cart</button></div>
            <div className='details'>
<p>{details.title}</p>
<p>{details.description}</p>
<p>$ {details.price}</p>
<p>Rating: {details.rating.rate}</p>
<button className='cartBtn'> <i class="fa-solid fa-bolt-lightning"> </i> Buy Now</button>

            </div>
            
        </div>
        </div>
    )

}
export default CartDetail;