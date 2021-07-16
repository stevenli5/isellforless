import './styles/App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import React, {useState} from 'react';
import iphone5sBlack from './assets/products/iphone5s-black.jpg';
import iphone6s from './assets/products/iphone6s-grey.png';
import iphone11promax from './assets/products/iphone11promax.jpg';

const allProducts = [{
  id: "0",
  category: "iPhone",
  name: "iPhone 5s",
  image: iphone5sBlack,
  price: "1000.30",
  rating: 5,
  quality: "Used - Acceptable",
  colour: "Black",
  description: "This iPhone 11 Pro Max, ",
  reviews: ['"Hella good"', "Safwan"],
  reviewName: ["", ""]
},
{
  id: "1",
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
  id: "2",
  category: "iPad",
  name: "iPad Pro 1ss inch",
  image: iphone6s,
  price: "1000.00",
  rating: 1,
  quality: "Used - Like New",
  description: "",
  reviews: ["", ""]
},
{
  id: "3",
  category: "iPad",
  name: "iPad Pro 1ss inch",
  image: iphone6s,
  price: "1000.00",
  rating: 1,
  quality: "Used - Like New",
  description: "",
  reviews: ["", ""]
},
{
  id: "4",
  category: "iPad",
  name: "iPad Pro 1ss inch",
  image: iphone11promax,
  price: "1000.00",
  rating: 1,
  quality: "Used - Like New",
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

  function handleAdd(item){
    //if(item.id not in cart)
    cart.push(item);
  }

  return (
    <div className="App">
      <NavBar cart={cart}/>
      <div className="row">
        <Sidebar />
        <div className="col-10 px-4 mt-5 mb-3 bg-light d-flex flex-wrap" style={{paddingTop: '4rem'}}>
          {products.map((item) => (<ProductCard {...item} handleAdd={handleAdd} />))}
        </div>
      </div>
    </div>
  );
}

export default App;