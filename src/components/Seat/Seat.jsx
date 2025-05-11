import React from 'react';
import styles from './Seat.module.css';

const Seat = ({ number, isBooked, isSelected, onClick }) => {
  const seatClasses = [
    styles.seat,
    isBooked ? styles.booked : '',
    isSelected ? styles.selected : ''
  ].join(' ');

  return (
    <div
      className={seatClasses}
      onClick={!isBooked ? onClick : null}
      title={`Місце ${number}`}
    >
      {number}
    </div>
  );
};

export default Seat;