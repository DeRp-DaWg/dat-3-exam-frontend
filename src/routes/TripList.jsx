import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { NavLink, useRouteLoaderData } from 'react-router-dom'

export default function TripList() {
  const [rows, setRows] = useState([])
  const {trips} = useRouteLoaderData("trips")
  
  function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    
    return hrs + " hours ";
  }
  
  useEffect(() => {
    const newRows = trips.map(trip => {
      return (
        <Col key={"tripcard"+trip.id}>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>{trip.name}</Card.Title>
              <Card.Text>
                Description to be added later
              </Card.Text>
              <Button variant="primary" as={NavLink} to={""+trip.id}>More</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Duration: {msToTime(trip.duration)}</small>
            </Card.Footer>
          </Card>
        </Col>
      )
    })
    setRows(newRows)
  },[])
  
  return (
    <Row xs={1} md={2} className="g-4">
      {rows}
    </Row>
  )
}
