import React from 'react'
import CastCard from "../CastCard/CastCard";
import './CastReel.scss'
export default function CastReel() {
  return (
    <div className="cast-reel">
      <h1>Top Billed Cast</h1>
      <div className="container">
      <CastCard/>
      <CastCard/>
      <CastCard/>
      <CastCard/>
      <CastCard/>
      <CastCard/>
      <CastCard/>
      <CastCard/>
      <CastCard/>
      <CastCard/>
      </div>
    </div>
  )
}
