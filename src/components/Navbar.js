import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="navbar-dark">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <i className="bi bi-shop me-2"></i>
          <span className="fw-bold">Ecom</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link-hover">Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className="nav-link-hover">Products</Nav.Link>
            <Nav.Link as={Link} to="/add-product" className="nav-link-hover">Add Product</Nav.Link>
            <Nav.Link as={Link} to="/orders" className="nav-link-hover">My Orders</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="btn btn-outline-light btn-sm">
              <i className="bi bi-wallet2 me-1"></i>
              Connect Wallet
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar; 