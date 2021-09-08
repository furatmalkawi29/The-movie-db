import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from "../../pages/HomePage";
import MovieDetails from "../../pages/MovieDetails";

export default function Main() {
  return (
    <React.Fragment>

      <HomePage/>
      {/* <MovieDetails/> */}
      {/* <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/movie/id" component={MovieDetails}/>
      </Switch> */}
    </React.Fragment>
  )
}
