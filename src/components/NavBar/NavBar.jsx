import React from "react";
import "../../reset.css";
import "./NavBar.scss";
import logo from "../../assets/logo2.svg";
import { FaSearch, FaPlus } from "react-icons/fa";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import fetchMoviesAsync from '../../redux/moviesList/action'
import { connect } from "react-redux";


function NavBar(props) {


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleClose = (event) => {
    setAnchorEl(null);
    let movieType = event.target.innerText.toLowerCase().split(' ').join('_');
    props.fetchMoviesAsync(movieType);
  };
  return (
    <nav>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="menu"
      >
        <MenuItem onClick={handleClose}>Popular</MenuItem>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
        <MenuItem onClick={handleClose}>Top rated</MenuItem>
      </Menu>
      <div>
        <img alt="logo" src={logo} />
        <ul>
          <li onClick={handleClick}>Movies</li>
          <li>TV Shows</li>
          <li>People</li>
          <li>More</li>
        </ul>
      </div>
      <FaPlus className="plus-icon" />
      <ul>
        <li>
          <span>EN</span>
        </li>
        <li>Login</li>
        <li>Join TMDB</li>
      </ul>
      <FaSearch className="search-icon" />
    </nav>
  );
}




let mepDispatchToProps = (dispatch)=>{
  return {
    fetchMoviesAsync: (movieType)=> dispatch(fetchMoviesAsync(movieType))
  }
}

export default connect (null,mepDispatchToProps) (NavBar)