import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../context/AuthContext';
import ProfileIcon from './ProfileIcon'; // Import the ProfileIcon component

function NavigationBar() {
  const {user, logoutUser} = useContext(AuthContext);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">Rentals</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Features</Nav.Link>
          <Nav.Link href="#">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary" type="submit">Search</Button>
        </Form>
        <ProfileIcon isAuthenticated={!!user} /> {/* Pass isAuthenticated as a prop */}
     
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;