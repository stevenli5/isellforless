import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo from '../assets/logo.png';

export default function NavBar() {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="d-flex" href="#home">
          <img
            alt=""
            src={logo}
            className="d-inline-block align-top"
            style={{ height: '100%', width: '5%' }}
          />{' '}
          <div className="fs-1 fw-bold ms-3" style={{ color: '#B3B3B3' }}><h1>iSellForLess</h1></div>
        </Navbar.Brand>
        <Form className="d-flex w-75">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}