import { Container, Navbar, Form, FormControl, Button, Modal } from "react-bootstrap";
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket as cart, faSearch as search } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Information from './Information';
import Payment from './Payment';
import Shipping from './Shipping';
import Cart from './Cart';
import Final from './Final';

function CartAndCheckout(props) {
  const [stage, setStage] = useState(0); // stage represents the current "stage" in the checkout process
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [total, setTotal] = useState(0);

  let infoObj = {firstName, setFirstName, lastName, setLastName, phoneNum, setPhoneNum, email, setEmail};
  let payObj = {cardName, setCardName, cardNum, setCardNum, cardDate, setCardDate, cardCVV, setCardCVV};
  let shipObj = {address, setAddress, zip, setZip, city, setCity, province, setProvince, country, setCountry};

  useEffect(() => {
    let curTotal = 0;
    props.cart.forEach(item => {
        curTotal += Number(item.price);
    });
    setTotal(curTotal);
  });

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{backgroundColor: '#E5E5E5'}} closeButton>
        <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: '#CCCCCC'}}>
          {stage === 0 ? <Cart cart={props.cart} total={total} handleRemove={props.handleRemove} handleClear={props.handleClear} /> : stage === 1 ? <Information {...infoObj}/> : stage === 2 ? <Payment {...payObj} /> : stage === 3 ? <Shipping {...shipObj}/> : <Final {...infoObj} {...payObj} {...shipObj} total={total}/>}

          <hr />
          {stage !== 0 ? <Button variant="dark" className="float-start" onClick={() => setStage(stage - 1)}>Back</Button> : <></>}
          {stage !== 4 ? <Button variant="dark" className="float-end" onClick={() => setStage(stage + 1)}>Next</Button> : <Button variant="dark" className="float-end" onClick={()=>{window.location.reload()}}>Confirm Order</Button>}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default function NavBar(props) {

  const [modalShow1, setModalShow1] = React.useState(false);

  let searchInput = null;

  function handleSearch(event){
    event.preventDefault();
    props.handleSearch(searchInput.value);
  }

  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <div className="d-flex">
          <img
            alt="iSellForLess logo"
            src={logo}
            className="d-inline-block align-top"
            style={{ height: '100%', width: '7%' }}
          />{' '}
          <div className="fs-1 fw-bold ms-3" style={{ color: '#B3B3B3' }}><h1>iSellForLess</h1></div>
        </div>
        <Form className="d-flex w-100 me-5" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            ref={(input) => { searchInput = input; }}
          />
          <Button variant="outline-light" onClick={handleSearch}><FontAwesomeIcon className="fs-4" icon={search} /></Button>
        </Form>
        <Button variant="secondary" className="rounded-circle p-2"><FontAwesomeIcon icon={cart} style={{ cursor: 'pointer' }} onClick={() => setModalShow1(true)} className="fs-2" />
        </Button>
      </Container>
      <CartAndCheckout
        show={modalShow1}
        onHide={() => setModalShow1(false)}
        cart={props.cart}
        handleRemove={props.handleRemove}
        handleClear={props.handleClear}
      />
    </Navbar>

  );
}