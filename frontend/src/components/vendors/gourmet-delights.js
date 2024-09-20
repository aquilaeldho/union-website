import React from 'react';
import { useNavigate } from 'react-router-dom';
import './gourmet-delights.css';

const GourmetDelights = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    alert('Thank you for considering our catering services! We will be in touch soon.');
  };

  const handleBackToHome = () => {
    navigate('/home');
  };

  return (
    <div className="caterer-page">
      <button className="close-button" onClick={handleBackToHome}>✕</button>
      <header className="caterer-header">
        <h1>Gourmet Delights Catering</h1>
        <p>
          Welcome to Gourmet Delights, where we transform your special occasions into culinary experiences
          you'll never forget. With a passion for food and a commitment to excellence, we offer a wide array
          of gourmet dishes tailored to your event, whether it’s an intimate gathering or a grand celebration.
        </p>
        <p>
          Our team of expert chefs uses only the finest ingredients to create dishes that are as visually
          stunning as they are delicious. We work closely with you to design a menu that perfectly complements
          your event’s theme and exceeds your expectations.
        </p>
        <p>
          Let's make your event unforgettable. Contact us today to start planning the perfect menu for your
          big day.
        </p>
      </header>

      <section className="caterer-gallery">
        <div className="caterer-item">
          <img src="caterer1.jpg" alt="Exquisite appetizer platter by Gourmet Delights" />
        </div>
        <div className="caterer-item">
          <img src="caterer2.jpg" alt="Beautifully presented main course by Gourmet Delights" />
        </div>
        <div className="caterer-item">
          <img src="caterer3.jpg" alt="Dessert selection by Gourmet Delights" />
        </div>
      </section>

      <div className="book-button-container">
        <button className="book-button" onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  );
};

export default GourmetDelights;
