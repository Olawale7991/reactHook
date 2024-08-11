import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={`${title} poster`} />
      <div className="movie-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Rating: {rating}/5</span>
      </div>
    </div>
  );
};

export default MovieCard;
