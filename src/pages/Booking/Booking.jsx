import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CinemaHall from '../../components/CinemaHall/CinemaHall';
import { movies } from '../../data/movies';
import styles from './Booking.module.css';

const Booking = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const foundMovie = movies.find(m => m.id === parseInt(movieId));
    if (!foundMovie) {
      navigate('/');
    } else {
      setMovie(foundMovie);
      // Імітація отримання заброньованих місць (у наступній лабі буде з API)
      const randomBooked = Array.from({ length: 15 }, () => 
        Math.floor(Math.random() * 80) + 1
      );
      setBookedSeats(randomBooked);
    }
  }, [movieId, navigate]);

  const handleSeatSelect = (seats) => {
    setSelectedSeats(seats);
  };

  return (
    <div className={styles.booking}>
      {movie && (
        <>
          <h2>Бронювання квитків на "{movie.title}"</h2>
          <div className={styles.hallContainer}>
            <CinemaHall 
              bookedSeats={bookedSeats}
              onSeatSelect={handleSeatSelect}
            />
          </div>
          <div className={styles.summary}>
            <h3>Вибрані місця:</h3>
            {selectedSeats.length > 0 ? (
              <ul className={styles.selectedSeatsList}>
                {selectedSeats.map(seat => (
                  <li key={seat}>Ряд {Math.ceil(seat / 10)}, Місце {seat % 10 || 10}</li>
                ))}
              </ul>
            ) : (
              <p>Оберіть місця на схемі вище</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Booking;