import React from 'react'
import CastCard from "../CastCard/CastCard";
import './CastReel.scss'
import { BsArrowRightShort } from "react-icons/bs";

export default function CastReel(props) {

  let castArr = props.details.credits.cast;
  
  let tenPeople = castArr.length>10? getTenPeople(castArr):castArr

  function getTenPeople (arr){
    return  castArr.filter((element,index)=> index <10);

  }


  return (
    <div className="cast-reel">
      <h1>Top Billed Cast</h1>
      <div className="container">
      {tenPeople.map(element=> <CastCard key={element.id} castInfo={element}/> )}
      <div className="view-more"><p>View More <BsArrowRightShort/></p></div>
      </div>
    </div>
  )
}
