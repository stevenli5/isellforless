import { Card, ListGroup, ListGroupItem, Modal, Button } from "react-bootstrap";
import iphone6s from '../assets/products/iphone6s.png';
import iphone11promax from '../assets/products/iphone11promax.jpg';
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
          Modal heading
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

export default function ProductCard() {
  
  const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Card style={{ width: '18rem', cursor: 'pointer' }} onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={iphone6s} style={{height: '16rem', width: '100%'}}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <ListGroup className="list-group-flush">
          <ListGroupItem><b>Price:</b></ListGroupItem>
          <ListGroupItem><b>Average Rating:</b></ListGroupItem>
          <ListGroupItem><b>Quality:</b></ListGroupItem>
        </ListGroup>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
    );
  }