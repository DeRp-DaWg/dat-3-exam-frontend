import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as loaders from './loaders'
import Root from './routes/Root'
import ErrorPage from './routes/ErrorPage'
import Index from './routes/Index'
import AdminPage from './routes/AdminPage'
import UserPage from './routes/UserPage'
import TripCreator from './routes/TripCreator'
import TripViewer from './routes/TripViewer'
import TripList from './routes/TripList'
import GuideViewer from './routes/GuideViewer'
import Login from './routes/Login'
import SimpleTripList from './routes/SimpleTripList'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: loaders.rootLoader,
    children: [
      {
        path: "",
        element: <Index/>
      },
      {
        path: "admin",
        element: <AdminPage/>,
        children: [
          {
            path: "trip",
            children: [
              {
                path: "create",
                id: "emptyTrip",
                loader: loaders.tripEmptyLoader,
                element: <TripCreator/>
              },
              {
                path: "update",
                id: "tripList",
                loader: loaders.allTripsLoader,
                element: <SimpleTripList/>
              },
              {
                path: "update/:tripID",
                id: "existingTrip",
                loader: loaders.tripLoader,
                element: <TripCreator/>
              }
            ]
          }
        ]
      },
      {
        path: "user",
        element: <UserPage/>,
        children: [
          {
            path: "trip",
            children: [
              {
                path: "",
                id: "trips",
                loader: loaders.allTripsLoader,
                element: <TripList/>
              },
              {
                path: ":tripID",
                id: "trip",
                loader: loaders.tripLoader,
                element: <TripViewer/>
              }
            ]
          },
          {
            path: "guide",
            children: [
              {
                path: ":guideID",
                id: "guide",
                loader: loaders.guideLoader,
                element: <GuideViewer/>
              }
            ]
          }
        ]
      },
      {
        path: "login",
        element: <Login/>
      }
    ]
  },
], {
  basename: "/DAT-3-Exam"
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
