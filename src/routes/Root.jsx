import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'

export default function Root() {
  const [token, setToken] = useState("")
  const [username, setUsername] = useState("")
  const [roles, setRoles] = useState([])
  
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Trip Searcher</Navbar.Brand>
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            {roles.includes("user") && <Nav.Link as={NavLink} to="/user">User page</Nav.Link>}
            {roles.includes("admin") && <Nav.Link as={NavLink} to="/admin">Admin page</Nav.Link>}
            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Outlet context={
          {
            token: [token, setToken],
            username: [username, setUsername],
            roles: [roles, setRoles]
          }
        }/>
      </Container>
    </>
  )
}
