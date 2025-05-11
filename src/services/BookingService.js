export const saveBooking = (bookingData) => {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(bookingData);
    localStorage.setItem('bookings', JSON.stringify(bookings));
  };
  
  export const getBookingsForMovie = (movieId) => {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    return bookings.filter(booking => booking.movieId === movieId);
  };
  
  export const getBookedSeats = (movieId) => {
    const bookings = getBookingsForMovie(movieId);
    return bookings.flatMap(booking => booking.seats);
  };