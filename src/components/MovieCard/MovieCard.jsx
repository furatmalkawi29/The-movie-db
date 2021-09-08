import React from 'react'
import "./MovieCard.scss";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import ProgressRing from "../ProgressRing/ProgressRing";

export default function MovieCard(props) {
  return (
    <div className="movie-card">
      <img alt={`${props.data.title} +-poster`} src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} />
      <HiDotsCircleHorizontal className="dots-icon"/>
      <ProgressRing score={props.data.vote_average} size="2.1em"/>
      <div className="card-text">
      <p>{props.data.title}</p>
      <p>{props.data.release_date}</p>
      </div>
    </div>
  )
}
