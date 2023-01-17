import React from 'react'
import { Outlet } from 'react-router-dom'

export default function UserPage() {
  return (
    <>
      <h1>User page</h1>
      <Outlet/>
    </>
  )
}
