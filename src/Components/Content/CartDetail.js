import '../UI/CartDetails.css'
const CartDetail = (props) =>{
    const details = props.cartDetails;

    return (
        <div>
            <ul className="thumb">
            <li><img src={details.image} alt="" /></li>
            <li><img src={details.image} alt=""/></li>
            <li><img src={details.image} alt=""/></li>
        </ul>
        <div className="imgBox">
            <h2>{details.title}</h2>
            <img src={details.image} alt=""/>
            <ul className="side">
                <span>Size</span>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
            </ul>
            <a href="" className="btn">Add To Cart</a>
        </div>
        </div>
    )

}
export default CartDetail;