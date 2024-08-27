import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Offcanvas, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './web-development-company-high-resolution-logo-white-transparent.png'
import '../App.css'

const Navigation = () => {
    const [show, setShow] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 991);
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Navbar  expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="100"
                height="70"
                className="d-inline-block align-top align-center"
                alt=""
              />
        
            </Navbar.Brand> 
            {isMobile ? (
              <Button variant="light" onClick={handleShow}>
                Menu
              </Button>
            ) : (
              <Navbar.Collapse className='navbar navbar-dark' >
                <Nav className="ml-auto" text="light" bg="dark" data-bs-theme="dark"> 
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About Us</Nav.Link>
                  <Nav.Link href="#packages">Packages</Nav.Link>
                  <Nav.Link href="#backdrops">Backdrops</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                  <Button variant="outline-light" className="ml-2">Get a Quote</Button>
                </Nav>
              </Navbar.Collapse>
            )}
          </Container>
        </Navbar>
  
        {isMobile && (
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body variant='dark'>
              <Nav className="flex-column">
                <Nav.Link href="#home" onClick={handleClose}>Home</Nav.Link>
                <Nav.Link href="#about" onClick={handleClose}>About Us</Nav.Link>
                <Nav.Link href="#packages" onClick={handleClose}>Packages</Nav.Link>
                <Nav.Link href="#backdrops" onClick={handleClose}>Backdrops</Nav.Link>
                <Nav.Link href="#contact" onClick={handleClose}>Contact</Nav.Link>
                <Button variant="outline-dark" className="mt-2" onClick={handleClose}>Get a Quote</Button>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        )}
      </>
    );
  };
  
  export default Navigation;
