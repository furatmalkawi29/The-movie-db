import React from "react";
import "./OverviewBanner.scss";
import ProgressRing from "../ProgressRing/ProgressRing";
import { BsFillBookmarkFill, BsFillPlayFill } from "react-icons/bs";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";


export default function OverviewBanner(props) {

  let background ={
    backgroundImage: `url(${"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dLUJGSrFWA1h3pnAqygAHK7ShVb.jpg"})`
  }

  return (

    <div className="layer-0" style={background}>
      <div className="layer-1">
      <div className="layer-2">
    <div className="overview-banner">
      <img
        alt={"movie-title" + "-poster"}
        src={
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Doctor_Doctor_s4_dvd.png/220px-Doctor_Doctor_s4_dvd.png"
        }
      />
      
      <section>
        <h1>
          the good doctor <span>(2017)</span>
        </h1>
        <p>
        <span className="category">R</span> Drama <span className="span-dot"></span>43m
        </p>

        <div className="movie-info">
          <div >
            <ProgressRing size="2.3em" />
            <p className="score"><span>User</span>
            <span>Score</span></p>
          </div>
          <ul>
            <li>
              <FaListUl />
            </li>
            <li>
              <AiFillHeart />
            </li>
            <li>
              <BsFillBookmarkFill />
            </li>
            <li>
              <AiFillStar />
            </li>
          </ul>
          <div className="play-trailer">
            <BsFillPlayFill />
            <p>Play Trailer</p>
          </div>
        </div>

        <div className="movie-info-text">
          <h3>It's not where you're from. It's where you belong.</h3>
          <h2>Overview</h2>
          <p>
            As a Korean-American man raised in the Louisiana bayou works hard to
            make a life for his family, he must confront the ghosts of his past
            as he discovers that he could be deported from the only country he
            has ever called home.
          </p>

          <div className="directors">
          <div>
            <p>Justin Chon</p>
            <p>Director, Screenplay</p>
          </div>
          <div>
            <p>Justin Chon</p>
            <p>Director, Screenplay</p>
          </div>
          <div>
            <p>Justin Chon</p>
            <p>Director, Screenplay</p>
          </div>
          <div>
            <p>Justin Chon</p>
            <p>Director, Screenplay</p>
          </div>
          </div>
        </div>
      </section>
    </div>
    </div>
        </div>
        </div>

  );
}
