import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
  return (
      <Link to={`/movie/:movieId`}>
      <div style={{minHeight:'500px'}} className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={props._source.poster} alt={`${props._source.title} image`}/>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
      
        <div className="media-content">
          <p className="title is-4">{props._source.title}</p>
         
        </div>
      </div>
  
      <div className="content">
      {props._source.overview ? (
          <span>{props._source.overview.slice(0,150)}...</span>
      ):(
          <div className="content has-text-centered">No description available</div>
      )}
      
      </div>
    </div>
  </div>
      
      </Link>
    
  )
}

export default MovieCard
