import axios from "axios";

let FETCH_MOVIE_BY_ID = 'FETCH_MOVIE_FROM_ID';
let CHANGE_ISLOADING_FLAG = 'CHANGE_ISLOADING_FLAG';

function filterMovieById(movieObject) {

  return {
    type:FETCH_MOVIE_BY_ID,
    payload:movieObject
  }
}

function changeIsloading() {

  return {
    type:CHANGE_ISLOADING_FLAG,
  }
}

export function fetchMovieByIdAsync(movieId) {
  return async (dispatch) =>{
    dispatch(changeIsloading());
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=release_dates,credits,keywords`);
    dispatch(filterMovieById(response.data));
    dispatch(changeIsloading());
    console.log(response.data)
  }
}
