import React from "react";
import '../UI/Footer.css'

const Footer = () =>{

    return(
        <div className="f-div">
<footer className="footer">
<div className="about">
    <div className="a-div">
        <div className="a-h1">COMPANY</div>
        <ul className="a-ul">
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">About us</a></li>
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">Team</a></li>
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">Careers</a></li>
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">Flipkart Blogs</a></li>
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">Bug Bounty</a></li>
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">Flipkart One</a></li>
        </ul>
    </div>
    <div className="a-div">
        <div className="a-h1">CONTACT</div>
        <ul className="a-ul">
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">Help & support</a></li>
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">Partner with us</a></li>
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">Ride with us</a></li>
          
        </ul>
    </div>
    <div class="a-div">
        <div class="a-h1">LEGAL</div>
        <ul class="a-ul">
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">Terms & conditions</a></li>
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">Refund & Cancelletion</a></li>
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">Privacy Policy</a></li>
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">Cookie Policy</a></li>
            <li className="a-li"><a className="a-li-a" href="#" target="_blank">Offer Terms</a></li>
        </ul>
    </div>
    <div class="a-div4">
        <a class="a-play" href="#" target="_blank">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="" />
        </a>
        <a class="a-play" href="#" target="_blank">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="" />
        </a>
    </div>
</div>
<div className="social">
    <div className="s-logo"><a href="#" target="_blank" >
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
    </a></div>
    <div className="s-copy">© 2022 Flipkart</div>
    <div className="s-social">
        <a href="#" target="_blank" ><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" target="_blank" ><i className="fa-brands fa-pinterest"></i></a>
        <a href="#" target="_blank" ><i className="fa-brands fa-instagram"></i></a>
        <a href="#" target="_blank" ><i className="fa-brands fa-twitter"></i></a>
    </div>
</div>

</footer></div>

    );
};

export default Footer;