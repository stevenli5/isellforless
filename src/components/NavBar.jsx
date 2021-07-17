import { Container, Navbar, Form, FormControl, Button, Modal } from "react-bootstrap";
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart as cartIcon } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Information from './Information';
import Payment from './Payment';
import Shipping from './Shipping';
import Cart from './Cart';

function CartAndCheckout(props) {
  const [stage, setStage] = useState(0);//stage represents the current "stage" in the checkout process

  return (

    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          {stage === 0 ? <Cart cart={props.cart} handleRemove={props.handleRemove}/> : stage === 1 ? <Information /> : stage === 2 ? <Payment /> : <Shipping />}

          <hr />
          {stage !== 0 ? <Button className="float-start" onClick={() => setStage(stage - 1)}>Back</Button> : <></>}
          {stage !== 3 ? <Button className="float-end" onClick={() => setStage(stage + 1)}>Next</Button> : <></>}
        </Modal.Body>
      </Modal>
    </>
  );
}


export default function NavBar(props) {

  const [modalShow1, setModalShow1] = React.useState(false);

  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <div className="d-flex">
          <img
            alt="iSellForLess logo"
            src={logo}
            className="d-inline-block align-top"
            style={{ height: '100%', width: '6%' }}
          />{' '}
          <div className="fs-1 fw-bold ms-3" style={{ color: '#B3B3B3' }}><h1>iSellForLess</h1></div>
        </div>
        <Form className="d-flex w-100 me-5">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Button variant="secondary"><FontAwesomeIcon icon={cartIcon} style={{ cursor: 'pointer' }} onClick={() => setModalShow1(true)} className="fs-2" />
        </Button>
      </Container>
      <CartAndCheckout
        show={modalShow1}
        onHide={() => setModalShow1(false)}
        cart={props.cart}
        handleRemove={props.handleRemove}
      />
    </Navbar>

  );
}