import * as tripFetcher from "./fetchers/tripFetcher"
import * as guideFetcher from "./fetchers/guideFetcher"

export async function rootLoader() {
  // const topics = await topicFecther.getTopics()
  // return {topics}
  return {}
}

export async function allTripsLoader() {
  const trips = await tripFetcher.getTrips()
  if (trips.code === 500 || trips.code === 404) {
    throw new Response("Not Found", { status: 404 })
  }
  return {trips}
}

export async function tripLoader({params}) {
  const trip = await tripFetcher.getTripByID(params.tripID)
  if (trip.code === 500 || trip.code === 404) {
    throw new Response("Not Found", { status: 404 })
  }
  return {trip}
}

export async function tripEmptyLoader() {
  const trip = {name: "", dateTime: "", location: "", duration: "", guides: [{name: "", gender: "", birthYear: 2000, profile: "", imageURL: ""}]}
  return {trip}
}

export async function guideLoader({params}) {
  const guide = await guideFetcher.getGuideByID(params.guideID)
  if (guide.code === 500 || guide.code === 404) {
    throw new Response("Not Found", { status: 404 })
  }
  return {guide}
}
