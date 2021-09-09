import React from 'react'
import './CastCard.scss'

export default function CastCard(props) {

  let image = props.castInfo.profile_path? `https://image.tmdb.org/t/p/w500/${props.castInfo.profile_path}` : 'http://tokyobootcamp.com/wp-content/uploads/2010/12/placeholder-300x300.png'
  
  return (
    <div className="CastCard">
      <img alt={"cast name"} src={image}/>
      <p>{props.castInfo.name}</p>
      <p>{props.castInfo.character}</p>
    </div>
  )
}
