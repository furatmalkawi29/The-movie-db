import React from 'react'
import './ProgressRing.scss'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ProgressRing(props) {

  return (
      <div className="progress-ring" >
        <p>{props.score*10}<span>%</span></p>
        <div className="shadow-circle"/>
      <CircularProgress className="progress" variant="determinate" size={props.size} color="secondary" value={props.score*10} />
      </div>

  );
}
