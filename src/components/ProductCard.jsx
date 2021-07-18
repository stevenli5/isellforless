import { Card, ListGroup, ListGroupItem, Modal, Button } from "react-bootstrap";
import React, {useEffect} from 'react';
import $ from 'jquery';

function ProductInfo(props) {
  function handleClick() {
    let { show, onHide, handleAdd, ...item } = props;
    props.handleAdd(item);
  }

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
      <Modal.Body>
        <div className="row">
          <div className="col-6">
            <img src={props.image} style={{ height: '23rem', width: '100%' }}></img>
          </div>
          <div className="col-6">
            <ListGroup className="list-group mb-5 fs-5">
              <ListGroupItem className="bg-light" style={{borderColor: '#000000'}}><b>Price:</b> ${props.price}</ListGroupItem>
              <ListGroupItem className="bg-light" style={{borderColor: '#000000'}}><b>Rating:</b> {props.rating}/5</ListGroupItem>
              <ListGroupItem className="bg-light" style={{borderColor: '#000000'}}><b>Quality:</b> {props.quality}</ListGroupItem>
              <ListGroupItem className="bg-light" style={{borderColor: '#000000'}}><b>Colour:</b> {props.colour}</ListGroupItem>
            </ListGroup>
            {props.description}
          </div>
          <div className="row mt-4">
            {props.reviews.map((review) => (<div className="mb-2">"{review}"</div>))}
            {props.reviewers.map((reviewers) => (<div className="mb-2">{reviewers}</div>))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-light">
        <Button variant="dark" onClick={handleClick}>Add to Cart</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function ProductCard(props) {

  const [modalShow, setModalShow] = React.useState(false);

  useEffect(()=>{
    $(document).ready(function() {
          $( ".card" ).hover(
          function() {
            $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
          }, function() {
            $(this).removeClass('shadow-lg');
          }
        );
     });
  })

  return (
    <>
      <Card className="shadow mx-5 mb-5 card" style={{ width: '18rem', cursor: 'pointer'}} onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={props.image} style={{ width: '100%' }} />

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
      <ProductInfo
        show={modalShow}
        onHide={() => setModalShow(false)}
        {...props}
      />
    </>
  );
}