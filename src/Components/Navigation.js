import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Offcanvas, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './web-development-company-high-resolution-logo-white-transparent.png';

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

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: 'black' }} className="justify-content-left">
                <Container className="justify-content-left">
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
                                <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
                                <Nav.Link onClick={() => scrollToSection('about')} style={{ color: 'white', whiteSpace: 'nowrap', marginRight: '5px' }}>About Us</Nav.Link>
                                <Nav.Link onClick={() => scrollToSection('portfolio')} style={{ color: 'white' }}>Packages</Nav.Link>
                                <Nav.Link onClick={() => scrollToSection('backdrops')} style={{ color: 'white' }}>Backdrops</Nav.Link>
                                <Nav.Link onClick={() => scrollToSection('contact')} style={{ color: 'white' }}>Contact</Nav.Link>
                                <Button variant="outline-light" className="ml-2">Get a Quote</Button>
                            </Nav>
                        </Navbar.Collapse>
                    )}
                </Container>
            </Navbar>

            {isMobile && (
                <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: 'black' }} >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="flex-column">
                            <Nav.Link href="/" onClick={handleClose} style={{ color: 'white' }}>Home</Nav.Link>
                            <Nav.Link onClick={() => { handleClose(); scrollToSection('about'); }} style={{ color: 'white' }}>About Us</Nav.Link>
                            <Nav.Link onClick={() => { handleClose(); scrollToSection('portfolio'); }} style={{ color: 'white' }}>Packages</Nav.Link>
                            <Nav.Link onClick={() => { handleClose(); scrollToSection('backdrops'); }} style={{ color: 'white' }}>Backdrops</Nav.Link>
                            <Nav.Link onClick={() => { handleClose(); scrollToSection('contact'); }} style={{ color: 'white' }}>Contact</Nav.Link>
                            <Button variant="outline-light" className="mt-2" onClick={handleClose}>Get a Quote</Button>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            )}
        </>
    );
};

export default Navigation;
