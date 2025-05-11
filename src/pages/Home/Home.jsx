import React from 'react';
import MovieList from '../../components/MovieList';
import { movies } from '../../data/movies';

const Home = () => {
  return (
    <div className="home">
      <h1>Фільми в прокаті</h1>
      <MovieList movies={movies} /> {/* Передаємо movies як пропс */}
    </div>
  );
};

export default Home;