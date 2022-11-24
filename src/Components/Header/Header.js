import "../UI/Header.css"

const Header = ()=>{

    return(
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
                <input className="searchInput" type="search" placeholder="Search for products, brands and more" id="search"></input>
                <label className="searchIcon" htmlFor="search"><i class="fa-solid fa-magnifying-glass"></i></label>
            </div>
            <div>
                <button>Login</button>
            </div>
            <div className="cart">
                <span><i class="fa-solid fa-cart-shopping"></i> Cart</span>
            </div>
        </div>
    );

}
export default Header;