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
  rating: 4.9,
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
  price: "432400.00",
  rating: 3.8,
  quality: "Used - Good",
  description: "",
  reviews: ["", ""]
},
{
  id: "2",
  category: "iPad",
  name: "iPad Pro 1ss inch",
  image: iphone6s,
  price: "130.00",
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
  id: "5",
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
  id: "6",
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
  id: "7",
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
  id: "8",
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
  id: "9",
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
  id: "10",
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
    cart.push(item);
  }

  function handleRemove(id){
    //console.log(id);
    let i = 0;
    for (; i < cart.length; i++) {
      if(cart[i].id===id){
        //console.log(cart[i].id);
        break;
      } 
    }
    cart.pop(i);
  }

  function sortByPrice(type){
    let sortedProducts = [...products];
    if(type==="L2H"){
      sortedProducts.sort((prod1, prod2)=>{return Number(prod1.price)-Number(prod2.price)});
    } else if (type==="H2L") {
      sortedProducts.sort((prod1, prod2)=>{return Number(prod2.price)-Number(prod1.price)});
    }
    setProducts(sortedProducts);
  }

  function sortByRating(type){
    let sortedProducts = [...allProducts];
    if(type === "1"){
      sortedProducts = sortedProducts.filter((prod)=>prod.rating>=1);
    } else if (type === "2") {
      sortedProducts = sortedProducts.filter((prod)=>prod.rating>=2);
    } else if (type === "3") {
      sortedProducts = sortedProducts.filter((prod)=>prod.rating>=3);
    } else if (type === "4") {
      sortedProducts = sortedProducts.filter((prod)=>prod.rating>=4);
    } 
    setProducts(sortedProducts);
  }

  return (
    <div className="App">
      <NavBar cart={cart} handleRemove={handleRemove}/>
      <div className="row">
        <Sidebar sortByPrice={sortByPrice} sortByRating={sortByRating}/>
        <div className="col-10 px-4 mt-5 bg-light d-flex flex-wrap" style={{paddingTop: '4rem'}}>
          {products.map((item) => (<ProductCard {...item} handleAdd={handleAdd} />))}
        </div>
      </div>
    </div>
  );
}

export default App;