import React from "react";
import '../UI/Footer.css'
import { Link } from "react-router-dom";

const Footer = () =>{

    return(
        <div className="f-div">
<footer className="footer">
<div className="about">
    <div className="a-div">
        <div className="a-h1">COMPANY</div>
        <ul className="a-ul">
            <li className="a-li"><Link className="a-li-a" target="_blank">About us</Link></li>
            <li className="a-li"><Link className="a-li-a" target="_blank">Team</Link></li>
            <li className="a-li"><Link className="a-li-a" target="_blank">Careers</Link></li>
            <li className="a-li"><Link className="a-li-a"  target="_blank">Flipkart Blogs</Link></li>
            <li className="a-li"><Link className="a-li-a"  target="_blank">Bug Bounty</Link></li>
            <li className="a-li"><Link className="a-li-a"  target="_blank">Flipkart One</Link></li>
        </ul>
    </div>
    <div className="a-div">
        <div className="a-h1">CONTACT</div>
        <ul className="a-ul">
            <li className="a-li"><Link className="a-li-a"  target="_blank">Help & support</Link></li>
            <li className="a-li"><Link className="a-li-a"  target="_blank">Partner with us</Link></li>
            <li className="a-li"><Link className="a-li-a" target="_blank">Ride with us</Link></li>
          
        </ul>
    </div>
    <div className="a-div">
        <div className="a-h1">LEGAL</div>
        <ul className="a-ul">
            <li className="a-li"><Link className="a-li-a"  target="_blank">Terms & conditions</Link></li>
            <li className="a-li"><Link className="a-li-a"  target="_blank">Refund & Cancelletion</Link></li>
            <li className="a-li"><Link className="a-li-a"  target="_blank">Privacy Policy</Link></li>
            <li className="a-li"><Link className="a-li-a"  target="_blank">Cookie Policy</Link></li>
            <li className="a-li"><Link className="a-li-a"  target="_blank">Offer Terms</Link></li>
        </ul>
    </div>
    <div className="a-div4">
        <Link className="a-play"  target="_blank">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="img..." />
        </Link>
        <Link className="a-play"  target="_blank">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="img..." />
        </Link>
    </div>
</div>
<div className="social">
    <div className="s-logo"><Link href="#" target="_blank" >
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="img..." />
    </Link></div>
    <div className="s-copy">© 2022 Flipkart</div>
    <div className="s-social">
        <Link target="_blank" ><i className="fa-brands fa-facebook-f"></i></Link>
        <Link target="_blank" ><i className="fa-brands fa-pinterest"></i></Link>
        <Link target="_blank" ><i className="fa-brands fa-instagram"></i></Link>
        <Link target="_blank" ><i className="fa-brands fa-twitter"></i></Link>
    </div>
</div>

</footer></div>

    );
};

export default Footer;