import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function ProductCard() {
    return (
      <a style={{ cursor: 'pointer' }} onClick="#">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <ListGroup className="list-group-flush">
          <ListGroupItem><b>Price:</b></ListGroupItem>
          <ListGroupItem><b>Review:</b></ListGroupItem>
          <ListGroupItem><b>Quality:</b></ListGroupItem>
        </ListGroup>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
    );
  }