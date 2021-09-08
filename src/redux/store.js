import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk'
import moviesListReducer from "./moviesList/Reducer";
let rootReducer = combineReducers ({
  movies: moviesListReducer
})
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store 