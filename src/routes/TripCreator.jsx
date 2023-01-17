import React, { Fragment, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useRouteLoaderData } from 'react-router-dom'
import * as tripFetcher from '../fetchers/tripFetcher'

export default function TripCreator() {
  const tripData = useRouteLoaderData("existingTrip")
  const [tripDTO, setTripDTO] = useState({id: null, name: "", dateTime: {}, location: "", duration: "", guides: []})
  const dateTimeDTO = {
    "date": {
        "year": 2023,
        "month": 1,
        "day": 17
    },
    "time": {
        "hour": 0,
        "minute": 0,
        "second": 0,
        "nano": 0
    }
  }
  const [fields, setFields] = useState([])
  const [isNewEntry, setIsNewEntry] = useState(true)
  const guideTemplate = {
    id: null,
    name: "",
    gender: "",
    birthYear: 2000,
    profile: "",
    imageURL: ""
  }
  
  
  useEffect(() => {
    if (tripData) {
      setTripDTO(tripData.trip)
      setIsNewEntry(false)
    }
  }, [])
  
  useEffect(() => {
    const guidesDTO = tripDTO.guides
    const newFields = guidesDTO.map((guide, guideIndex) => {
      return (
        <Fragment key={guideIndex}>
          <Form.Label>Guide {guideIndex+1}</Form.Label>
          <div>
            <Container>
              <Form.Group className="mb-3" controlId={"name"+guideIndex}>
                <Form.Label>Name</Form.Label>
                <Form.Control value={guidesDTO[guideIndex].name} onChange={event => {updateGuide(event, guideIndex, "name")}}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId={"gender"+guideIndex}>
                <Form.Label>Gender</Form.Label>
                <Form.Control value={guidesDTO[guideIndex].gender} onChange={event => {updateGuide(event, guideIndex, "gender")}}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId={"birthYear"+guideIndex}>
                <Form.Label>Birth year</Form.Label>
                <Form.Control value={guidesDTO[guideIndex].birthYear} onChange={event => {updateGuide(event, guideIndex, "birthYear")}}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId={"profile"+guideIndex}>
                <Form.Label>Profile</Form.Label>
                <Form.Control value={guidesDTO[guideIndex].profile} onChange={event => {updateGuide(event, guideIndex, "profile")}}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId={"imageURL"+guideIndex}>
                <Form.Label>Image URL</Form.Label>
                <Form.Control value={guidesDTO[guideIndex].imageURL} onChange={event => {updateGuide(event, guideIndex, "imageURL")}}/>
              </Form.Group>
              <Button className="mb-3" variant="danger" onClick={event => removeGuide(guideIndex)}>Remove Guide</Button>
            </Container>
          </div>
        </Fragment>
      )
    })
    setFields(newFields)
  }, [tripDTO])
  
  function createGuide() {
    setTripDTO(trip => {return {...trip, guides: [...trip.guides, {...guideTemplate}]}})
  }
  
  function updateGuide(event, index, variable) {
    let value = event.target.value
    setTripDTO(trip => {
      const newTrip = JSON.parse(JSON.stringify(trip))
      newTrip.guides[index][variable] = value
      return newTrip
    })
  }
  
  function removeGuide(index) {
    setTripDTO(trip => {
      const newTrip = JSON.parse(JSON.stringify(trip))
      newTrip.guides.splice(index, 1)
      return newTrip
    })
  }
  
  function setDate(value) {
    const values = value.split("-")
    dateTimeDTO.date.year = values[0]
    dateTimeDTO.date.month = values[1]
    dateTimeDTO.date.day = values[2]
  }
  
  function setTime(value) {
    const values = value.split(":")
    dateTimeDTO.time.hour = values[0]
    dateTimeDTO.time.minute = values[1]
  }
  
  function handleSubmit() {
    const finalTripDTO = {...tripDTO, dateTime: dateTimeDTO}
    if (isNewEntry) {
      tripFetcher.createTrip(finalTripDTO)
      .then(response => {
        console.log(response)
      })
    } else {
      tripFetcher.updateTrip(finalTripDTO)
      .then(response => {
        console.log(response)
      })
    }
    // .then(response => {
    //   console.log(response)
    //   // window.location.href = "./"
    //   navigate("/teacherPage")
    // })
  }
  
  return (
    <>
      <h1>Trip Creator</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formTripName">
          <Form.Label>Name</Form.Label>
          <Form.Control value={tripDTO.name} onChange={event => setTripDTO(trip => {return {...trip, name: event.target.value}})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTripDateTimeYear">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" onChange={event => setDate(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTripDateTimeYear">
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" onChange={event => setTime(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTripLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control value={tripDTO.location} onChange={event => setTripDTO(trip => {return {...trip, location: event.target.value}})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTripDuration">
          <Form.Label>Duration</Form.Label>
          <Form.Control value={tripDTO.duration} onChange={event => setTripDTO(trip => {return {...trip, duration: event.target.value}})}/>
        </Form.Group>
        {fields}
        <Button onClick={createGuide}>Create new guide</Button>
        {/* <div>
          <Form.Group className="mb-3" controlId="formTripPackingList">
          <Form.Control value={tripDTO.packingList} onChange={event => setTripDTO(trip => {return {...trip, packingList: event.target.value}})}/>
          </Form.Group>
        </div> */}
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  )
}
