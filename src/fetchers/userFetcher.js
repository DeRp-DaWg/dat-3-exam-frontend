import { fetchURL, dataFactory, backendAPIURL } from "./fetcherUtils"

export async function login(username, password) {
  const data = {
    "username": username,
    "password": password
  }
  const trips = fetchURL(backendAPIURL+"login", dataFactory("POST", data))
  return trips
}
