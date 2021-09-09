import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk'
import moviesListReducer from "./moviesList/Reducer";
import movieDetailsReducer from './movieDetails/Reducer'
let rootReducer = combineReducers ({
  movies: moviesListReducer,
  details: movieDetailsReducer,
})
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store 