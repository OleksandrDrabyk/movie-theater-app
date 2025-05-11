import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Booking from './pages/Booking/Booking';
import styles from './App.module.css';

function App() {
  return (
    <>
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
            <p>© 2025 Кінотеатр. Всі права захищені.</p>
          </footer>
        </div>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;