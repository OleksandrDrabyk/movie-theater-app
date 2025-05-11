import React, { useState } from 'react';
import MovieCard from './MovieCard';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Пошук фільмів..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={styles.list}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className={styles.noResults}>Фільми не знайдені</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;