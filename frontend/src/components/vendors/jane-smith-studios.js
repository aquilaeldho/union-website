import React from 'react';
import { useNavigate } from 'react-router-dom';
import './jane-smith-studios.css';

const JaneSmithStudios = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    alert('Thank you for considering Elegant Bridal Couture! We will be in touch soon.');
  };

  const handleBackToHome = () => {
    navigate('/home');
  };

  return (
    <div className="bridal-designer-page">
      <button className="close-button" onClick={handleBackToHome}>✕</button>
      <header className="bridal-designer-header">
        <h1>Jane Smith Studios</h1>
        <p>
          Hello, I'm the lead designer at Elegant Bridal Couture, where we believe that every bride deserves to feel
          like royalty on her special day. With years of experience in creating bespoke bridal gowns, I pour my heart
          and soul into every dress, ensuring that it perfectly reflects the bride's personality, style, and dreams.
        </p>
        <p>
          Our gowns are meticulously crafted with the finest fabrics, intricate lacework, and exquisite detailing. 
          From the initial sketch to the final fitting, I work closely with each bride to bring her vision to life, 
          creating a gown that is not just beautiful, but also unforgettable.
        </p>
        <p>
          Let us help you create the dress of your dreams. Whether you have a clear vision or need guidance in finding
          the perfect design, I'm here to make sure you look and feel absolutely stunning on your big day.
        </p>
      </header>

      <section className="bridal-designer-gallery">
        <div className="bridal-designer-item">
          <img src="bridal1.jpg" alt="A stunning bridal gown by Elegant Bridal Couture" />
        </div>
        <div className="bridal-designer-item">
          <img src="bridal2.jpg" alt="Intricate lace details on a custom gown" />
        </div>
        <div className="bridal-designer-item">
          <img src="bridal3.jpg" alt="Elegant bridal gown fitting session" />
        </div>
      </section>

      <div className="book-button-container">
        <button className="book-button" onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  );
};

export default JaneSmithStudios;
