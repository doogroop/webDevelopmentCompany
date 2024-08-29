import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Offcanvas, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './web-development-company-high-resolution-logo-black-transparent.png';
import './ContactPage';
import './Contact';
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
            <Navbar expand="lg" style={{ backgroundColor: 'white' }} className="justify-content-center">
                <Container className="justify-content-center">
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
                        <Navbar.Collapse className="justify-content-center">
                            <Nav className="ml-auto">
                                <Nav.Link href="/" style={{ color: 'black' }}>Home</Nav.Link>
                                <Nav.Link href="#about" style={{ color: 'black' }}>About Us</Nav.Link>
                                <Nav.Link href="#portfolio" style={{ color: 'black' }}>Packages</Nav.Link>
                                <Nav.Link href="#backdrops" style={{ color: 'black' }}>Backdrops</Nav.Link>
                                <Nav.Link href='#contact' style={{ color: 'black' }}>Contact</Nav.Link>
                                <Button variant="outline-dark" className="ml-2">Get a Quote</Button>
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
                    <Offcanvas.Body>
                        <Nav className="flex-column">
                            <Nav.Link href="#home" onClick={handleClose} style={{ color: 'black' }}>Home</Nav.Link>
                            <Nav.Link href="#about" onClick={handleClose} style={{ color: 'black' }}>About Us</Nav.Link>
                            <Nav.Link href="#prices" onClick={handleClose} style={{ color: 'black' }}>Packages</Nav.Link>
                            <Nav.Link href="#backdrops" onClick={handleClose} style={{ color: 'black' }}>Backdrops</Nav.Link>
                            <Nav.Link href="#contact" onClick={handleClose} style={{ color: 'black' }}>Contact</Nav.Link>
                            <Button variant="outline-dark" className="mt-2" onClick={handleClose}>Get a Quote</Button>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            )}
        </>
    );
};

export default Navigation;
