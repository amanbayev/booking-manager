import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Booking Manager</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Bookings</Nav.Link>
          <Nav.Link href="#pricing">Clients</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNavbar