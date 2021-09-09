import React, {useState} from "react";
import "./MovieCard.scss";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import ProgressRing from "../ProgressRing/ProgressRing";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {MdMovie} from 'react-icons/md';
import { connect } from "react-redux";

 function MovieCard(props) {

  const [genres, setGenres] = useState('')

  //mapping technique
  function getTopThreeGenres(arr){
    let movieGenreId = props.data.genre_ids;
    let sudoHashmap = [];
    let result = [];

    for(let item of arr){
      sudoHashmap[item.id]=item.name;
    }

    for(let item of movieGenreId){
     result.push(sudoHashmap[item]) 
    }
    
    let topThree = result.filter((element,index)=> index <3);

    return topThree;
  }


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    let genreResult = getTopThreeGenres(props.genresList).join(' | ');
    setGenres(genreResult)
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <div className="movie-card">
      <Link to={`/movie/${props.data.id}`}>
        <img
          alt={`${props.data.title} +-poster`}
          src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`}
        />
      </Link>
      <HiDotsCircleHorizontal onClick={handleClick} className="dots-icon" />
      <ProgressRing score={props.data.vote_average} size="2.1em" />
      <div className="card-text">
        <Link to={`/movie/${props.data.id}`}>{props.data.title}</Link>
        <p>{props.data.release_date}</p>
      </div>


      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="menu-home"
      >
        <MenuItem className="menu-item-home" onClick={handleClose}>
          <div><MdMovie/> Genres 
          <p>{genres}</p></div>
        </MenuItem>
      </Menu>
    </div>
  );
}

let mepStateToProps = (state) => {
  return {
    genresList: state.movies.genresList,
  };
};


export default connect(mepStateToProps)(MovieCard);
