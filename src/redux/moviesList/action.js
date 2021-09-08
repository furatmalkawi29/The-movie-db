
import axios from "axios";

let FETCH_MOVIES = 'FETCH_MOVIES';
let UPDATE_HEADING = 'UPDATE_HEADING';

function fetchMovies(moviesArr) {
  console.log(moviesArr)
  return {
    type:FETCH_MOVIES,
    payload: moviesArr
  }
}

function updateHeading(movieType) {
  console.log(movieType)
  return {
    type:UPDATE_HEADING,
    payload: movieType
  }
}

function fetchMoviesAsync(movieType) {
  return async (dispatch) =>{
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=12bc6ecb9c283f7d949b6d6c91e417ac&language=en-US`);
    dispatch(fetchMovies(response.data.results));
    dispatch(updateHeading(movieType));
  }
}
export default fetchMoviesAsync 