import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'

export default function AdminPage() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="trip/create">Create trip</Nav.Link>
            <Nav.Link as={NavLink} to="trip/update">Update trip</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  )
}
