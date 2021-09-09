
import axios from "axios";

let FETCH_MOVIES = 'FETCH_MOVIES';
let UPDATE_HEADING = 'UPDATE_HEADING';
let FETCH_GENRES = 'FETCH_GENRES';

function fetchMovies(moviesArr) {
  console.log("moviesArr ", moviesArr)
  return {
    type:FETCH_MOVIES,
    payload: moviesArr
  }
}

function updateHeading(movieType) {
  console.log("movieType ", movieType)
  return {
    type:UPDATE_HEADING,
    payload: movieType
  }
}

function fetchGenres(genres) {
  console.log("genres ", genres)
  return {
    type:FETCH_GENRES,
    payload: genres
  }
}

function fetchMoviesAsync(movieType) {
  return async (dispatch) =>{
    let moviesResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    let genresResponse = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    
    dispatch(fetchGenres(genresResponse.data.genres));
    dispatch(fetchMovies(moviesResponse.data.results));
    dispatch(updateHeading(movieType));
  }
}
export default fetchMoviesAsync 