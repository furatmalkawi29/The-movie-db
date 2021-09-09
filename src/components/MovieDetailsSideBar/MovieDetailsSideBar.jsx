import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import "./MovieDetailsSideBar.scss";

export default function MovieDetailsSideBar(props) {

  let logo = getLogoFromArr();

  let language = props.details.spoken_languages[0]["english_name"];

  let keywordsArr = props.details.keywords.keywords;


  function getLogoFromArr (){
    let arr = props.details.production_companies;
    for(let item of arr){
      if (item["logo_path"])
      return `https://image.tmdb.org/t/p/w500/${item["logo_path"]}`;
    }
    return 'http://tokyobootcamp.com/wp-content/uploads/2010/12/placeholder-300x300.png'
  }

  return (
    <div className="movie-details-sidebar">
      <ul>
        <li>
          <AiFillFacebook />
        </li>
        <li>
          <AiOutlineTwitter />
        </li>
        <li>
          <AiOutlineInstagram />
        </li>
        <li>
          <BsLink />
        </li>
      </ul>

      <h2>Facts</h2>
      <div className="container">
        <div>
          <h3>Status</h3>
          <p>{props.details.status}</p>
        </div>

        <div>
          <h3>Networks</h3>
          <img alt="network" src={logo} />
        </div>

        <div>
          <h3>Type</h3>
          <p>Scripted</p>
        </div>

        <div>
          <h3>Original Language</h3>
          <p>{language}</p>
        </div>

        <div>
          <h3>Keywords</h3>
          <div className="keywords">
            {keywordsArr.map((element, index) => (
              <span key={`${index}-${element.name}`}>{element.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
