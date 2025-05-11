import React from 'react';
import MovieList from '../../components/MovieList/MovieList';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h2>Поточні кінофільми</h2>
      <MovieList />
    </div>
  );
};

export default Home;