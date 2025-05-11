import React from 'react';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  // Функція для форматування дати
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('uk-UA', options);
  };

  return (
    <div className={styles.card}>
      <div className={styles.posterContainer}>
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          className={styles.poster}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster';
          }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.description}>{movie.description}</p>
        <div className={styles.details}>
          <span className={styles.genre}>{movie.genre}</span>
          <span className={styles.duration}>{movie.duration} хв</span>
        </div>
        <div className={styles.sessions}>
          {movie.sessions.map((session, index) => (
            <div key={index} className={styles.session}>
              <span className={styles.sessionDate}>{formatDate(session.date)}</span>
              <span className={styles.sessionTime}>{session.time}</span>
              <span className={styles.sessionHall}>{session.hall}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;