import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap';
import { NavLink, useRouteLoaderData } from 'react-router-dom'

export default function TripViewer() {
  const {trip} = useRouteLoaderData("trip")
  
  function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    
    return hrs + " hours and " + mins + " minutes";
  }
  
  return (
    <div>
      id: {trip.id}<br/>
      name: {trip.name}<br/>
      location: {trip.location}<br/>
      dateTime: {trip.dateTime}<br/>
      duration: {msToTime(trip.duration)}<br/>
      <ul>
        {trip.packingList.map(item => {
          return (
            <li>item</li>
          )
        })}
      </ul>
      <ul>
        {trip.guides.map(guide => {
          return (
            <Fragment key={"guide"+guide.id}>
            <li>{guide.name}</li>
            <Button as={NavLink} to={"/user/guide/"+guide.id}>More</Button>
            </Fragment>
          )
        })}
      </ul>
    </div>
  )
}
