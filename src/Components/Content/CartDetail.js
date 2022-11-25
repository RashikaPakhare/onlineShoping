
const CartDetail = (props) =>{
    const details = props.cartDetails;

    return (
        <div>
            <ul class="thumb">
            <li><img src={details.image} alt="" /></li>
            <li><img src={details.image} alt=""/></li>
            <li><img src={details.image} alt=""/></li>
        </ul>
        <div class="imgBox">
            <h2>{details.title}</h2>
            <img src={details.image} alt=""/>
            <ul class="side">
                <span>Size</span>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
            </ul>
            <a href="" class="btn">Add To Cart</a>
        </div>
        </div>
    )

}
export default CartDetail;