// export const backendAPIURL = "http://localhost:8080/api/"
export const backendAPIURL = "https://larspeterjoergensen.com/dat-3-exam-backend/api/"

export var token = ""

export function setRoles(newRoles) {
  roles = newRoles
}

export function setToken(_token) {
  token = _token
}

export function fetchURL(URL, data) {
  if (!data) data = dataFactory("GET")
  return fetch(URL, data)
    .then((response) => response.json())
    .then((data) => {return data})
}

export function dataFactory(method, body, headers) {
  const dataobj = {
    "method": method,
  }
  if (headers) {
    dataobj.headers = headers
  } else {
    dataobj.headers = {}
  }
  if (body) {
    dataobj.body = JSON.stringify(body)
  }
  dataobj["headers"]["Content-Type"] = "application/json"
  return dataobj
}
