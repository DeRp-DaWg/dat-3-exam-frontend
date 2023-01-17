import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { NavLink, useRouteLoaderData } from 'react-router-dom'
import * as tripFetcher from '../fetchers/tripFetcher'

export default function SimpleTripList() {
  const [rows, setRows] = useState([])
  const {trips} = useRouteLoaderData("tripList")
  
  useEffect(() => {
    const newRows = trips.map((trip, index) => {
      return (
        <tr key={trip.id}>
          <td>{trip.id}</td>
          <td>{trip.name}</td>
          <td>{trip.location}</td>
          {/* <td>{trip.dateTime}</td> */}
          <td>{trip.duration}</td>
          {/* <td>{trip.packingList}</td>
          <td>{trip.guides}</td> */}
          <td>
            <Button as={NavLink} to={""+trip.id}>Edit</Button>
            <Button variant='danger' value={trip.id} onClick={event => {handleDelete(index, event.target.value)}}>Delete</Button>
          </td>
        </tr>
      )
    })
    setRows(newRows)
  },[])
  
  function handleDelete(index, value) {
    tripFetcher.deleteTrip(value)
    setRows(rows => {rows.splice(index,1)})
  }
  
  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>location</th>
          {/* <th>dateTime</th> */}
          <th>duration</th>
          {/* <th>packingList</th>
          <th>guides</th> */}
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
}
