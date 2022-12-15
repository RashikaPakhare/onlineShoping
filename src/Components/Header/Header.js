import "../UI/Header.css";
import {useState} from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const Header = ()=>{

    const theme = localStorage.getItem("theme");
    console.log(theme);
    const [check, setCheck] = useState(false);


    return(
        <div >
            <div className="header">
            <div >
                <img alt="img..." className="logo" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"></img>
                <div className="logo-sub">
                    <span>
                        Explore  
                    </span> 
                     <span>
                         Plus
                    </span>
                    <img alt="img..." src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png">
                    </img>
                </div>
            </div>
            <div>
                <input className="searchInput" type="search" placeholder="Search by catagories" id="search" onKeyDown={(event)=>{event.key === "Enter" && <Link></Link>}}></input>
                <label className="searchIcon" htmlFor="search"><i className="fa-solid fa-magnifying-glass"></i></label>
            </div>
   
            <div>
                <button className="button">Login</button>
            </div>
            <div className="cart">
                <span ><i className="fa-solid fa-cart-shopping"></i> Cart</span>
        
            </div>
            <Form>
      <Form.Check
      onClick={(e) => {
        (theme === "light" || theme === null)?
         localStorage.setItem("theme", "dark"):
         localStorage.setItem("theme", "light");
       window.location.reload();
       setCheck(!check)
     } }
        type="switch"
        id="custom-switch"
        label="Dark theme is here"
        checked={!check}
      />
                
            {/* <button className="button"
        onClick={(e) => {
           (theme === "light" || theme === null)?
            localStorage.setItem("theme", "dark"):
            localStorage.setItem("theme", "light");
          
          
          window.location.reload();
        }}
      >
        Toggle Theme
      </button> */}
      </Form>
            <div>

            <i className="fa-solid fa-rectangle-list navbar"></i>
            </div>
            </div>


            <div className="hide-navbar">
            <div className="nav">
            <div>
                <img alt="img..." className="logo" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"></img>
                <div className="logo-sub">
                    <span>
                        Explore  
                    </span> 
                     <span>
                         Plus
                    </span>
                    <img alt="img..." src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png">
                    </img>
                </div>
            </div>
                <i className="colse fa-solid fa-xmark"></i>
                </div>


                
                <div>
                <ul className="mobile-nav">
        <li>
          
            <Link>Top Offers</Link>
        </li>

        <li>
            
           <Link to={`products/catagory/men's clothing`}>Men's clothing</Link>
        </li>
        <li>
           
            <Link to={`products/catagory/jewelery`}>Jewelery</Link>
        </li>
        <li>
          
             <Link to={`products/catagory/women's clothing`}>Women's clothing</Link>
        </li>
        <li>
            
          <Link to={`products/catagory/electronics`}>Electronics</Link>
        </li>
        </ ul>
        <ul className="mobile-login-add">
        <li>
        
        <Link className='addPrdt' to=''>Login</Link>
         
        </li>
        <li>
        <Link className='addPrdt' to='/add-product'>Add Product</Link>
        </li>
        </ul>
                </div>
            </div>
            
            
            
        </div>
    );

}
export default Header;