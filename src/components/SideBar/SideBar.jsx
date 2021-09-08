import React from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import { connect } from "react-redux";
import "./SideBar.scss";

 function SideBar(props) {

  let movieType = props.movieType.split('_').join(' ');
  return (
    <aside>

      <h2>{movieType} Movies</h2>

      <div className="choice border-choice">
        <div>
          <p>Sort</p>
          <RiArrowRightSLine />
        </div>
      </div>

      <div className="choice border-choice">
        <div>
          <p>Filters</p>
          <RiArrowRightSLine />
        </div>
      </div>

      <div className="choice border-choice">
        <div>
          <p>Where To Watch</p>
          <RiArrowRightSLine />
        </div>
      </div>

      <button className="choice ">Search</button>
    </aside>
  );
}

let mepStateToProps = (state)=>{
  return {
    movieType: state.movies.movieType
  }
}
export default connect (mepStateToProps) (SideBar)