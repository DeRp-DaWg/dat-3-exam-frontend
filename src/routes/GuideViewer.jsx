import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'

export default function GuideViewer() {
  const {guide} = useRouteLoaderData("guide")
  
  return (
    <div>
      name: {guide.name}<br/>
      gender: {guide.gender}<br/>
      birthYear: {guide.birthYear}<br/>
      profile: {guide.profile}<br/>
      imageURL: {guide.imageURL}<br/>
    </div>
  )
}
