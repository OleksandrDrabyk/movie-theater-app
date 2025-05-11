import React, { useState } from 'react';
import Seat from '../Seat/Seat';
import styles from './CinemaHall.module.css';

const CinemaHall = ({ rows = 8, seatsPerRow = 10, bookedSeats = [], onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    const isSelected = selectedSeats.includes(seatNumber);
    let newSelectedSeats;
    
    if (isSelected) {
      newSelectedSeats = selectedSeats.filter(num => num !== seatNumber);
    } else {
      newSelectedSeats = [...selectedSeats, seatNumber];
    }
    
    setSelectedSeats(newSelectedSeats);
    onSeatSelect(newSelectedSeats);
  };

  return (
    <div className={styles.hall}>
      <div className={styles.screen}>ЕКРАН</div>
      <div className={styles.seatsGrid}>
        {Array.from({ length: rows }, (_, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            <div className={styles.rowNumber}>{rowIndex + 1}</div>
            {Array.from({ length: seatsPerRow }, (_, seatIndex) => {
              const seatNumber = rowIndex * seatsPerRow + seatIndex + 1;
              const isBooked = bookedSeats.includes(seatNumber);
              const isSelected = selectedSeats.includes(seatNumber);
              
              return (
                <Seat
                  key={seatNumber}
                  number={seatNumber}
                  isBooked={isBooked}
                  isSelected={isSelected}
                  onClick={() => handleSeatClick(seatNumber)}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={`${styles.legendColor} ${styles.available}`}></div>
          <span>Вільні</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.legendColor} ${styles.selected}`}></div>
          <span>Вибрані</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.legendColor} ${styles.booked}`}></div>
          <span>Заброньовані</span>
        </div>
      </div>
    </div>
  );
};

export default CinemaHall;