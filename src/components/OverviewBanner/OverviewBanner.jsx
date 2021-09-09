import React from "react";
import "./OverviewBanner.scss";
import ProgressRing from "../ProgressRing/ProgressRing";
import { BsFillBookmarkFill, BsFillPlayFill } from "react-icons/bs";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";

export default function OverviewBanner(props) {
  let background = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.details.backdrop_path})`,
  };

  ///////////////////////data processing//////////////////////
  let title = props.details.title;
  let date = props.details.release_date.split("-")[0];
  let runtime = timeConvert(props.details.runtime);
  let score = props.details.vote_average;
  let tagline = props.details.tagline ? props.details.tagline : "";
  let certification = getCertification();
  let overview = props.details.overview;
  let crewArr = props.details.credits.crew;
  let crew = getCrew(crewArr);
  let crewDistinct = [];
  getDistinct(crew);



  ///////////////////////////methods//////////////////////////
  function getCertification() {
    let certification = props.details.release_dates.results.filter(
      (element) => {
        return element.iso_3166_1 === "US";
      }
    );
    certification = certification[0]["release_dates"][0]["certification"];

    return certification;
  }




  function getDistinct(arr) {
    let obj = {};

    arr.forEach((element, index) => {
      if (!obj[element.name]) {
        obj[element.name] = { index: index };
        crewDistinct.push({
          id: `${index}-${element.name}`,
          name: element.name,
          job: element.job,
        });
      } else if (crewDistinct[obj[element.name].index]) {
        crewDistinct[obj[element.name].index].job =
          crewDistinct[obj[element.name].index].job + ", " + element.job;
      }
    });

    crewDistinct = crewDistinct.filter((element, index) => index < 5);
  }




  function getCrew(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
      if (
        arr[i]["job"] === "Director" ||
        arr[i]["job"] === "Screenplay" ||
        arr[i]["job"] === "Writer" ||
        arr[i]["job"] === "Novel" ||
        arr[i]["job"] === "Characters"
      )
        result.push(arr[i]);
      i++;
    }

    return result;
  }



  function timeConvert(n) {
    var hours = n / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return `${rhours}h ${rminutes}m`;
  }


  
  return (
    <div className="layer-0" style={background}>
      <div className="layer-1">
        <div className="layer-2">
          <div className="overview-banner">
            <img
              alt="poster"
              src={`https://image.tmdb.org/t/p/w500/${props.details.poster_path}`}
            />

            <section>
              <h1>
                {title} <span>({date})</span>
              </h1>
              <p>
                <span className="category">{certification}</span>
                {props.details.genres.reduce((fullStr, item) => {
                  return fullStr + item.name + ", ";
                }, " ")}
                <span className="span-dot"></span>
                {runtime}
              </p>

              <div className="movie-info">
                <div>
                  <ProgressRing score={score} size="2.3em" />
                  <p className="score">
                    <span>User</span>
                    <span>Score</span>
                  </p>
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
                <h3>{tagline}</h3>
                <h2>Overview</h2>
                <p>{overview}</p>

                <div className="directors">
                  {crewDistinct.map((element) => {
                    return (
                      <div key={element.id}>
                        <p>{element.name}</p>
                        <p>{element.job}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
