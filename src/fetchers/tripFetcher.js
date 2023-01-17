import { fetchURL, dataFactory, backendAPIURL, token } from "./fetcherUtils"

export async function getTrips() {
  const headers = {
    "x-access-token":token 
  }
  const trips = fetchURL(backendAPIURL+"trip", dataFactory("GET", null, headers))
  return trips
}

export async function getTripByID(id) {
  const headers = {
    "x-access-token":token 
  }
  const trip = fetchURL(backendAPIURL+"trip/"+id, dataFactory("GET", null, headers))
  return trip
}

export async function createTrip(tripDTO) {
  const headers = {
    "x-access-token":token 
  }
  const trip = fetchURL(backendAPIURL+"trip", dataFactory("POST", tripDTO, headers))
  return trip
}

export async function updateTrip(tripDTO) {
  const headers = {
    "x-access-token":token 
  }
  const trip = fetchURL(backendAPIURL+"trip", dataFactory("PUT", tripDTO, headers))
  return trip
}

export async function deleteTrip(id) {
  const headers = {
    "x-access-token":token 
  }
  const trip = fetchURL(backendAPIURL+"trip/"+id, dataFactory("DELETE", null, headers))
  return trip
}

export async function joinTrip(username, id) {
  const headers = {
    "x-access-token":token 
  }
  const body = {
    "username": username,
  }
  const trip = fetchURL(backendAPIURL+"trip/"+id, dataFactory("PUT", body, headers))
  return trip
}
