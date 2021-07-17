import './styles/App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import React, { useState, useEffect } from 'react';
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle as question } from '@fortawesome/free-solid-svg-icons';
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
  const [priceSortType, setPriceSortType] = useState("");
  const [ratingSortType, setRatingSortType] = useState("");
  const [categoryType, setCategoryType] = useState("");
  const [qualitySortType, setQualitySortType] = useState("");
  const [modalShow, setModalShow] = React.useState(false); // information modal

  function handleAdd(item) {
    cart.push(item);
  }

  function handleRemove(id) {
    let i = 0;
    for (; i < cart.length; i++) {
      if (cart[i].id === id) {
        break;
      }
    }
    cart.pop(i);
  }

  useEffect(() => {
    let sortedProducts = [...allProducts];

    //sort price
    if (priceSortType === "L2H") {
      sortedProducts.sort((prod1, prod2) => { return Number(prod1.price) - Number(prod2.price) });
    } else if (priceSortType === "H2L") {
      sortedProducts.sort((prod1, prod2) => { return Number(prod2.price) - Number(prod1.price) });
    }

    //sort rating
    if (ratingSortType === "1") {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= 1);
    } else if (ratingSortType === "2") {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= 2);
    } else if (ratingSortType === "3") {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= 3);
    } else if (ratingSortType === "4") {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= 4);
    }

    //sort category
    if (categoryType === "iPhone") {
      sortedProducts = sortedProducts.filter((prod) => prod.category === "iPhone");
    } else if (categoryType === "iPad") {
      sortedProducts = sortedProducts.filter((prod) => prod.category === "iPad");
    } else if (categoryType === "MacBook") {
      sortedProducts = sortedProducts.filter((prod) => prod.category === "MacBook");
    } else if (categoryType === "Case") {
      sortedProducts = sortedProducts.filter((prod) => prod.category === "Case");
    } else if (categoryType === "Charger") {
      sortedProducts = sortedProducts.filter((prod) => prod.category === "Charger");
    } else if (categoryType === "Accessory") {
      sortedProducts = sortedProducts.filter((prod) => prod.category === "Accessory");
    }

    //sort quality
    if (qualitySortType === "Like New") {
      sortedProducts = sortedProducts.filter((prod) => prod.quality === "Used - Like New");
    } else if (qualitySortType === "Good") {
      sortedProducts = sortedProducts.filter((prod) => prod.quality === "Used - Good");
    } else if (qualitySortType === "Acceptable") {
      sortedProducts = sortedProducts.filter((prod) => prod.quality === "Used - Acceptable");
    }

    setProducts(sortedProducts);
  }, [priceSortType, ratingSortType, categoryType, qualitySortType]);


  return (
    <div className="App">
      <NavBar cart={cart} handleRemove={handleRemove} handleClear={setCart} />
      <div className="row">
        <Sidebar sortByPrice={setPriceSortType} sortByRating={setRatingSortType} setCategory={setCategoryType} sortByQuality={setQualitySortType} />
        <div className="col-10 px-4 mt-5 bg-light d-flex flex-wrap" style={{ paddingTop: '4rem' }}>
          {products.map((item) => (<ProductCard {...item} handleAdd={handleAdd} />))}
          <Button variant="dark" className="me-3 mb-3 p-2" style={{ position: 'fixed', right: '0', bottom: '0' }} onClick={() => setModalShow(true)}><FontAwesomeIcon className="fs-1" icon={question} /></Button>
          <Info
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
}

function Info(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="fs-4">Information</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2 className="fs-5">About Us</h2>
        <p>
          Founded in April 2020 and based in Ottawa, Ontario, Canada. Our mission is to provide contactless delivery of low-cost Apple products for our clients in North America.
        </p>
        <h2 className="fs-5">Contact Us</h2>
        <p>For general inquiries, feel free to email us at <a href="mailto:contact@isellforless.ca">contact@isellforless.ca</a> or call us at (613) 314-2020.</p>
        <div className="row">
          <div className="col-6 text-center"><h2 className="fs-5">Operating Hours</h2>
          <p><span class="fw-bold">Sunday:</span> Closed
                        <br />
                        <span class="fw-bold">Monday:</span> 8:00&nbsp;AM&nbsp;-&nbsp;8:00&nbsp;PM
                        <br />
                        <span class="fw-bold">Tuesday:</span> 8:00&nbsp;AM&nbsp;-&nbsp;8:00&nbsp;PM
                        <br />
                        <span class="fw-bold">Wednesday:</span> 8:00&nbsp;AM&nbsp;-&nbsp;9:00&nbsp;PM
                        <br />
                        <span class="fw-bold">Thursday:</span> 7:00&nbsp;AM&nbsp;-&nbsp;7:00&nbsp;PM
                        <br />
                        <span class="fw-bold">Friday:</span> 10:00&nbsp;AM&nbsp;-&nbsp;5:00&nbsp;PM
                        <br />
                        <span class="fw-bold">Saturday:</span> 10:00AM&nbsp;AM&nbsp;-&nbsp;5:00&nbsp;PM
                    </p>
                    <p>Closed on holidays.</p>
          </div>
          <div className="col-6 text-center"><h2 className="fs-5">Customer Service Centre</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d296.5212061801834!2d-75.51159146108778!3d45.453953679863936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce121776ff9477%3A0x9eafa552f4f154ec!2s2269%20Belcourt%20Blvd%2C%20Orl%C3%A9ans%2C%20ON%20K1C%201M7!5e1!3m2!1sen!2sca!4v1626549463711!5m2!1sen!2sca" width="100%" height="250" style={{border: '0'}} allowfullscreen="" loading="lazy"
                        title="Steven's Veterinary Hospital Google Maps view"></iframe>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}


export default App;