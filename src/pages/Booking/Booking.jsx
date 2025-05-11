import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CinemaHall from '../../components/CinemaHall/CinemaHall';
import BookingForm from '../../components/BookingForm/BookingForm';
import { movies } from '../../data/movies';
import { getBookedSeats } from '../../services/BookingService';
import styles from './Booking.module.css';

const Booking = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const foundMovie = movies.find(m => m.id === parseInt(movieId));
    if (!foundMovie) {
      navigate('/');
    } else {
      setMovie(foundMovie);
      // Отримуємо заброньовані місця з BookingService
      const booked = getBookedSeats(parseInt(movieId));
      setBookedSeats(booked);
    }
  }, [movieId, navigate]);

  const handleSeatSelect = (seats) => {
    setSelectedSeats(seats);
  };

  const handleBookingSuccess = () => {
    setShowForm(false);
    setSelectedSeats([]);
    // Оновлюємо список заброньованих місць після успішного бронювання
    const updatedBookedSeats = getBookedSeats(parseInt(movieId));
    setBookedSeats(updatedBookedSeats);
  };

  return (
    <div className={styles.booking}>
      {movie && (
        <>
          <h2>Бронювання квитків на "{movie.title}"</h2>
          
          {!showForm ? (
            <>
              <div className={styles.hallContainer}>
                <CinemaHall 
                  bookedSeats={bookedSeats}
                  selectedSeats={selectedSeats}
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
                
                {selectedSeats.length > 0 && (
                  <button 
                    className={styles.bookButton}
                    onClick={() => setShowForm(true)}
                  >
                    Забронювати
                  </button>
                )}
              </div>
            </>
          ) : (
            <BookingForm 
              movieId={parseInt(movieId)}
              selectedSeats={selectedSeats}
              onSuccess={handleBookingSuccess}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Booking;