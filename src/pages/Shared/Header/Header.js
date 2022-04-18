import React from 'react';
import {signOut} from 'firebase/auth'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
// import logo from '../../../images/logo.png'
const Header = () => {

  const [user] = useAuthState(auth)

  const handleSingOut = () => {
    signOut(auth); 
  }
    return (
        <header>
            <>
  
  <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Hassan & CO </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#services">Services</Nav.Link>
     
    </Nav>
    <Nav>
    <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      {
        user?
          <button onClick={handleSingOut}>Sign Out</button>
        : 
        <Nav.Link as={Link} to="login">
        Login
      </Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


</>


        </header>
    );
};

export default Header;