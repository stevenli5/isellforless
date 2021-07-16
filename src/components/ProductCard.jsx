import { Card, ListGroup, ListGroupItem, Modal, Button } from "react-bootstrap";
import React from 'react';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-light">
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light">
        <div className="row">
        <div className="col-6">
          <img src={props.image} style={{height: '23rem', width: '100%'}}></img>
          </div>
          <div className="col-6">
          <ListGroup className="list-group-flush mb-5">
          <ListGroupItem className="bg-light"><b>Price:</b> ${props.price}</ListGroupItem>
          <ListGroupItem className="bg-light"><b>Rating:</b> {props.rating}/5</ListGroupItem>
          <ListGroupItem className="bg-light"><b>Quality:</b> {props.quality}</ListGroupItem>
          <ListGroupItem className="bg-light"><b>Colour:</b> {props.colour}</ListGroupItem>
        </ListGroup>
        {props.description}
        </div>
        <div className="row mt-4">
          {props.reviews.map((review) => (<div className="mb-2">{review}</div>))}
        </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-light">
        <Button >Add to Cart</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function ProductCard(props) {
  
  const [modalShow, setModalShow] = React.useState(false);
  console.log(props.image);
    return (
      <>
        <Card style={{ width: '18rem', cursor: 'pointer', borderColor: '#000000' }} onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={props.image} style={{height: '18rem', width: '100%'}}/>
        
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <ListGroup className="list-group-flush">
          <ListGroupItem><b>Price:</b> ${props.price}</ListGroupItem>
          <ListGroupItem><b>Rating:</b> {props.rating}/5</ListGroupItem>
          <ListGroupItem><b>Quality:</b> {props.quality}</ListGroupItem>
          <ListGroupItem><b>Colour:</b> {props.colour}</ListGroupItem>
        </ListGroup>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        {...props}
      />
      </>
    );
  }