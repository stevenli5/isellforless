import './styles/App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import React, {useState} from 'react';
import iphone5sBlack from './assets/products/iphone5s-black.jpg';
import iphone6s from './assets/products/iphone6s.png';
import iphone11promax from './assets/products/iphone11promax.jpg';

const allProducts = [{
  category: "iPhone",
  name: "iPhone 5s",
  image: iphone5sBlack,
  price: "1000.30",
  rating: 5,
  quality: "Used - Acceptable",
  colour: "Black",
  description: "This iPhone 11 Pro Max, ",
  reviews: ['"Hella good"', "Safwan"], // <FontAwesomeIcon icon={filled} />
  reviewName: ["", ""]
},
{
  category: "iPad",
  name: "iPad Pro 11 inch",
  image: iphone6s,
  price: "1000.00",
  rating: 3,
  quality: "Used - Good",
  description: "",
  reviews: ["", ""]
},
{
  category: "iPad",
  name: "iPad Pro 1ss inch",
  image: iphone6s,
  price: "1000.00",
  rating: 1,
  quality: "Used - Like New",
  description: "",
  reviews: ["", ""]
}
]

function App() {
  const [products, setProducts] = useState(allProducts);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <div className="row">
        <Sidebar />
        <div className="col-10 p-5 bg-light d-flex" >
          {products.map((item) => (<ProductCard {...item} />))}
        </div>
      </div>
    </div>
  );
}

export default App;