import '../UI/Menu.css'
import { Link } from 'react-router-dom';

const Menu =()=>{
    const Electronics = "electronics";
    const Men = `men's clothing`;
    const Women = `women's clothing`;
    const Jewelery = "jewelery";

    return(
        <ul className="menu-header">
        <li>
            <img alt='img...' src="https://img.freepik.com/free-vector/christmas-gifts-background_23-2147703684.jpg?w=740&t=st=1669619284~exp=1669619884~hmac=841472e45efd06920360f053c278b2310da9654c747bad91c26855ff9cbc1294"></img>
            <Link>Top Offers</Link>
        </li>
        
        <li>
            <img alt='img...' src="https://img.freepik.com/free-photo/portrait-handsome-businessman_329181-9105.jpg?w=360&t=st=1669619109~exp=1669619709~hmac=ffead6f967e71ba3f2b6e88569987019ca287ef744a1ce6ff1720ea355cd638b"></img>
           <Link to={`products/catagory/${Men}`}>Men's clothing</Link>
        </li>
        <li>
            <img alt='img...' src="https://img.freepik.com/free-photo/luxurious-golden-ring-with-purple-gemstone_1203-1528.jpg?w=740&t=st=1669619033~exp=1669619633~hmac=07347bbb14bc6d3666cc5a160bcc693cf9cee6635ab63a06013ae8bb44bd20bf"></img>
            <Link to={`products/catagory/${Jewelery}`}>Jewelery</Link>
        </li>
        <li>
            <img alt='img...' src="https://img.freepik.com/free-photo/cheerful-traditional-indian-woman-white-background-studio-shot_1157-48206.jpg?w=360&t=st=1669619231~exp=1669619831~hmac=a465aad043928987793dc6b54f03ea1c4d999d17f68589beaa606962d32ece44"></img>
             <Link to={`products/catagory/${Women}`}>Women's clothing</Link>
        </li>
        <li>
            <img alt='img...' src="https://img.freepik.com/premium-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg?w=900"></img>
          <Link to={`products/catagory/${Electronics}`}>Electronics</Link>
        </li>
        <li>
        <Link className='addPrdt' to='/add-product'>Add Product</Link>
        </li>
        
       {/* <select >
        <option value="asce">
           <Link to='products/asce'>Asce</Link></option>
           <option value="dsce">
           <Link to='products/dsce'>dsce</Link></option>
       </select> */}
        </ul>
    );

}
export default Menu;