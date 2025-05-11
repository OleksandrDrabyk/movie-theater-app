import React, { useState } from 'react';
import { saveBooking } from '../../services/BookingService';
import { toast } from 'react-toastify';
import styles from './BookingForm.module.css';

const BookingForm = ({ movieId, selectedSeats, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Введіть ім'я";
    if (!formData.phone.trim()) newErrors.phone = "Введіть телефон";
    if (!formData.email.trim()) {
      newErrors.email = "Введіть email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Невірний формат email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate() && selectedSeats.length > 0) {
      saveBooking({
        movieId,
        seats: selectedSeats,
        customer: formData,
        date: new Date().toISOString()
      });
      toast.success('Бронювання успішне!');
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Дані для бронювання</h3>
      
      <div className={styles.formGroup}>
        <label>Ім'я*</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className={errors.name ? styles.errorInput : ''}
        />
        {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
      </div>
      
      <div className={styles.formGroup}>
        <label>Email*</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className={errors.email ? styles.errorInput : ''}
        />
        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
      </div>
      
      <div className={styles.formGroup}>
        <label>Телефон*</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className={errors.phone ? styles.errorInput : ''}
        />
        {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
      </div>
      
      <div className={styles.selectedSeats}>
        <h4>Вибрані місця:</h4>
        <ul>
          {selectedSeats.map((seat, index) => (
            <li key={index}>Ряд {Math.ceil(seat / 10)}, Місце {seat % 10 || 10}</li>
          ))}
        </ul>
      </div>
      
      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={selectedSeats.length === 0}
      >
        Підтвердити бронювання
      </button>
    </form>
  );
};

export default BookingForm;