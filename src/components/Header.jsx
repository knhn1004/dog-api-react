import React from 'react';
import {
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">React Dog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Browse Dogs</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
