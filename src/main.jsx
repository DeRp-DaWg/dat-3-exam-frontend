import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as loaders from './loaders'
import Root from './routes/Root'
import ErrorPage from './routes/ErrorPage'
import Index from './routes/Index'

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
      }
    ]
  },
], {
  basename: "/dat-3-exam"
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
