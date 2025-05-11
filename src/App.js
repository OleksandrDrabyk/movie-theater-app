import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Booking from './pages/Booking/Booking';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <header className={styles.header}>
          <h1>Кінотеатр "Кіносвіт"</h1>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking/:movieId" element={<Booking />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>© 2023 Кінотеатр. Всі права захищені.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;