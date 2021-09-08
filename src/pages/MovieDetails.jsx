import React from 'react'
import OverviewBanner from "../components/OverviewBanner/OverviewBanner";
import CastReel from '../components/CastReel/CastReel';

//We don't have an overview translated in English. Help us expand our database by adding one.
export default function MovieDetails() {
  return (
    <React.Fragment>
      <OverviewBanner/>
      <CastReel/>
    </React.Fragment>
  )
}
