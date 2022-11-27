import '../UI/Menu.css'
import { Link } from 'react-router-dom';

const Menu =()=>{
    return(
        <div className="menu-header">
        <div>
            <img alt='img...' src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"></img>
            <p>Top Offers</p>
        </div>
        {/* <div>
            <img alt='img...' src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"></img>
            <p>Grocery</p>
        </div> 
        <div>
            <img alt='img...' src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"></img>
            <LINK to={`catagory/electronics`}>TV Mobiles</LINK>
        </div>*/}
        <div>
            <img alt='img...' src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"></img>
            <br/><br/><Link to={`products/catagory/men's clothing`}>Men's clothing</Link>
        </div>
        <div>
            <img alt='img...' src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"></img>
            <br/><br/>  <Link to={`products/catagory/jewelery`}>Jewelery</Link>
        </div>
        <div>
            <img alt='img...' src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"></img>
            <br/><br/>  <Link to={`products/catagory/women's clothing`}>Women's clothing</Link>
        </div>
        <div>
            <img alt='img...' src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"></img>
            <br/><br/> <Link to={`products/catagory/electronics`}>Electronics</Link>
        </div>
        {/* <div>
            <img alt='img...' src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"></img>
            <p>Home</p>
        </div>
        <div>
            <img alt='img...' src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"></img>
            <p>Appliances</p>
        </div>
        <div>
            <img alt='img...' src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"></img>
            <p>Travel</p>
        </div>
        
        <div>
            <img alt='img...' src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"></img>
            <p>2-Wheelers</p>
        </div> */}
        </div>
    );

}
export default Menu;