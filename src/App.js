
import './App.css';
import HomeScreen from './Screens/HomeScreens';
import {Routes, Route} from 'react-router-dom';


function App() {
  // const cartList = [
  //   {
  //     id: 'c1',
  //     price: '₹30,000',
  //     off: '60% off',
  //     name: 'POCO F4 5G',
  //     srcs: "https://rukminim1.flixcart.com/image/312/312/l4n2oi80/mobile/h/h/i/-original-imagfhuecztmg3gz.jpeg?q=70",
  //   },
  //   {
  //     id: 'c2',
  //     price: '₹50,000',
  //     off: '20% off',
  //     name: 'BGauss BG D15 Pro',
  //     srcs: "https://rukminim1.flixcart.com/image/612/612/xif0q/electric-bike-scooter/8/n/i/-original-imaggcdwr2fbmxeg.jpeg?q=70",
  //   },
  //   {
  //     id: 'c3',
  //     name: 'Raymond Formal Shirt',
  //     price: '₹500',
  //     off: '40% off',
  //     size:'S, M, XL, XXL',
  //     srcs: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/o/s/e/-original-imagj4paf9yhbapw.jpeg?q=70",
  //   },
  //   {
  //     id: 'c4',
  //     price: '₹80,000',
  //     off: '30% off',
  //     name: 'APPLE 2022 MacBook AIR M2',
  //     srcs: "https://rukminim1.flixcart.com/image/312/312/l4hcx3k0/computer/y/j/z/macbook-air-thin-and-light-laptop-apple-original-imagfdeqter4sj2j.jpeg?q=70",
  //   },
  //   {
  //     id: 'c5',
  //     price: '₹35,000',
  //     off: '20% off',
  //     size:'S, M, XL, XXL',
  //     name: 'Floral Print Lehenga Choli',
  //     srcs: "https://rukminim1.flixcart.com/image/612/612/klicfww0/lehenga-choli/q/k/v/free-full-sleeve-d-green-raani-lehngha-choli-dholiya-original-imagym4yttxryuag.jpeg?q=70",
  //   },
  //   {
  //     id: 'c6',
  //     price: '₹65,000',
  //     off: '10% off',
  //     name: 'APPLE iPhone 11',
  //     srcs: "https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
  //   },
  //   {
  //     id: 'c7',
  //     price: '₹70,999',
  //     off: '15% off',
  //     name: 'DELL Core i5 11th Gen ',
  //     srcs: "https://rukminim1.flixcart.com/image/312/312/l4d2ljk0/computer/5/j/g/inspiron-laptop-dell-original-imagf9zamufxbpza.jpeg?q=70",
  //   },
  //   {
  //     id: 'c8',
  //     price: '₹1,00,000',
  //     off: '25% off',
  //     name: 'HERO Pleasure+ XTEC',
  //     srcs: "https://rukminim1.flixcart.com/image/612/612/xif0q/electric-bike-scooter/1/6/p/-original-imaggapemmbxcdrb.jpeg?q=70",
  //   },

    
  // ]


 
// console.log(cartList);

    return (
      <Routes>
        <Route  path='/' element={<HomeScreen></HomeScreen>}/>
      </Routes>
      
   );

}

export default App;
