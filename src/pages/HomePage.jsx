import React, {useEffect} from 'react'
import MovieCard from "../components/MovieCard/MovieCard";
import SideBar from '../components/SideBar/SideBar'
import { connect } from "react-redux";
import fetchMoviesAsync from '../redux/moviesList/action'

function HomePage(props) {

  let grid = {
    display:"grid",
    gridTemplateColumns:"22% 78%",
  }

  let gridCards = {
    display:"flex",
    justifyContent:"space-between",
    flexWrap:"wrap",
    padding:"8% 4% 2% 0%"
  }

  useEffect(() => {
    props.fetchMoviesAsync('popular')
  }, [])

  return (
    <div style={grid}>
      
      <SideBar/>

      <div style={gridCards}>
      {props.movies.map(element=>{
        return <MovieCard key={element.id} data={element}/>
      })}
      </div>
      
    </div>
  )
}

let mepStateToProps = (state)=>{
  return {
    movies: state.movies.moviesArr
  }
}

let mepDispatchToProps = (dispatch)=>{
  return {
    fetchMoviesAsync: (movieType)=> dispatch(fetchMoviesAsync(movieType))
    
  }
}

export default connect (mepStateToProps,mepDispatchToProps) (HomePage)