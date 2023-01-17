import React, { useState } from 'react'
import { setToken as setFetcherToken } from "../fetchers/fetcherUtils"
import * as userFetcher from '../fetchers/userFetcher'
import { Button, Form } from 'react-bootstrap'
import { redirect, useNavigate, useOutletContext } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate("")
  const context = useOutletContext()
  const [token, setToken] = context.token
  const [username, setUsername] = context.username
  const [roles, setRoles] = context.roles
  const [usernameField, setUsernameField] = useState("")
  const [passwordField, setPasswordField] = useState("")
  
  function handleSubmit(event) {
    event.preventDefault()
    userFetcher.login(usernameField, passwordField)
    .then(data => {
      if (data.code) {
        switch (data.code) {
          case 403:
            console.log("Wrong login")
            break
          default:
            console.log("Something went wrong")
            break
        }
      } else {
        const claims = JSON.parse(atob(data.token.split(".")[1]))
        setUsername(data.username)
        setToken(data.token)
        setFetcherToken(data.token)
        setRoles(claims.roles.split(","))
        navigate("/")
      }
    })
  }
  
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={usernameField} onInput={event => setUsernameField(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" value={passwordField} onInput={event => setPasswordField(event.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}
