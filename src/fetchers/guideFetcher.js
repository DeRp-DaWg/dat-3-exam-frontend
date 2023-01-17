import { fetchURL, dataFactory, backendAPIURL, token } from "./fetcherUtils"

export async function getGuides() {
  const headers = {
    "x-access-token":token 
  }
  const guides = fetchURL(backendAPIURL+"guide", dataFactory("GET", null, headers))
  return guides
}

export async function getGuideByID(id) {
  const headers = {
    "x-access-token":token 
  }
  const guide = fetchURL(backendAPIURL+"guide/"+id, dataFactory("GET", null, headers))
  return guide
}

export async function updateTrip() {
  const headers = {
    "x-access-token":token 
  }
  const guide = fetchURL(backendAPIURL+"guide/"+id, dataFactory("PUT", null, headers))
  return guide
}
