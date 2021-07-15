import { Container, Navbar, Form, FormControl, Button, Modal } from "react-bootstrap";
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart as cartIcon } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function NavBar() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Navbar className="sticky-top" bg="dark" variant="dark">
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
        <Button variant="secondary"><FontAwesomeIcon icon={cartIcon} style={{ cursor: 'pointer' }} onClick={() => setModalShow(true)} className="fs-2"/>
        </Button>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Navbar>
    
  );
}