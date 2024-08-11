import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'inc.jpg',
      rating: 4.8,
    },
    {
      title: 'The Dark Knight',
      description: 'Batman sets out to dismantle the remaining criminal organizations that plague Gotham.',
      posterURL: 'dark.jpeg',
      rating: 4.9,
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'int.jpg',
      rating: 4.7,
    },
  ]);

  const [searchTitle, setSearchTitle] = useState('');
  const [searchRating, setSearchRating] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      (searchRating === '' || movie.rating >= parseFloat(searchRating))
  );

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchRating={searchRating}
        setSearchRating={setSearchRating}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({
        title: 'New Movie',
        description: 'New movie description',
        posterURL: 'https://example.com/new-movie.jpg',
        rating: 4.5,
      })}>
        Add New Movie
      </button>
    </div>
  );
}

export default App;
