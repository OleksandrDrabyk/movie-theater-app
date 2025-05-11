import React from 'react';
import { movies } from './data/movies';
import MovieList from './components/MovieList';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Кінотеатр "Кіносвіт"</h1>
      </header>
      <main className={styles.main}>
        <MovieList movies={movies} />
      </main>
      <footer className={styles.footer}>
        <p>© 2025 Кінотеатр. Всі права захищені.</p>
      </footer>
    </div>
  );
}

export default App;