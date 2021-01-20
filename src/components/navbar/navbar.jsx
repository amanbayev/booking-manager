import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">

      <Navbar.Brand as={NavLink} to="/" exact className="my-font-righteous">Booking Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" exact className="my-font-bebas">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/bookings" className="my-font-bebas">Bookings</Nav.Link>
            <Nav.Link as={NavLink} to="/clients" className="my-font-bebas">Clients</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/auth" className="my-font-bebas">Login</Nav.Link>
          </Nav>
        </Container>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar