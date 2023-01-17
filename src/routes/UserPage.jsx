import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, Outlet, useOutletContext } from 'react-router-dom'

export default function UserPage() {
  const context = useOutletContext()
  
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="trip">View trips</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
        </Container>
      </Navbar>
      <Outlet context={context}/>
    </>
  )
}
