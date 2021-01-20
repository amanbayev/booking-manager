import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" exact className="my-font-righteous">Booking Manager</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact className="my-font-bebas">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/bookings" className="my-font-bebas">Bookings</Nav.Link>
          <Nav.Link as={NavLink} to="/clients" className="my-font-bebas">Clients</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to="/auth">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNavbar