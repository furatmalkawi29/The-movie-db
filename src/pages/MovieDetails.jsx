import React, {useEffect} from 'react'
import OverviewBanner from "../components/OverviewBanner/OverviewBanner";
import CastReel from '../components/CastReel/CastReel';
import {useParams} from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovieByIdAsync } from "../redux/movieDetails/Action";
import { If, Then, Else } from "react-if";
import MovieDetailsSideBar from "../components/MovieDetailsSideBar/MovieDetailsSideBar";
import CircularIndeterminate from '../components/LoadingIndicator/LoadingIndicator'

function MovieDetails(props) {

  const {id} = useParams();

  useEffect(() => {
    props.fetchMovieByIdAsync(id);
  }, []);
  

  return (
    <React.Fragment>
      <If condition={!props.isLoading && Object.keys(props.details).length}>
        <Then>
      <OverviewBanner details={props.details}/>
      <CastReel details={props.details}/>
      <MovieDetailsSideBar details={props.details}/>
      </Then>
      <Else>
        <CircularIndeterminate/>
      </Else>
      </If>
    </React.Fragment>
  )
}

 
let mepStateToProps = (state) => {
  return {
    details: state.details.currentMovieData,
    isLoading:state.details.isDetailsLoading,
  };
};

let mepDispatchToProps = (dispatch) => {
  return {
    fetchMovieByIdAsync: (movieId) => dispatch(fetchMovieByIdAsync(movieId)),
  };
};

export default connect(mepStateToProps, mepDispatchToProps)(MovieDetails);

