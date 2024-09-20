import React from 'react';
import HomeNav from '../HomeNav';
import { useNavigate } from 'react-router-dom';
import './john-doe-photography.css';

const JohnDoePhotography = () => {
    const navigate = useNavigate();
  const handleBooking = () => {
    alert('Thank you for considering John Doe Photography! We will be in touch soon.');
  };

  const handleGoBack = () => {
    navigate('/home'); 
  };

  return (
    <div className="portfolio-page">
        <HomeNav />
        <button className="close-button" onClick={handleGoBack}>✕</button>
      <header className="portfolio-header">
        <h1>John Doe Photography</h1>
        <p>
          Hi, I'm John Doe, and photography isn't just my profession—it's my passion. For over a decade, I've been 
          capturing moments that tell stories, evoke emotions, and last a lifetime. Whether it's the joy of a wedding, 
          the beauty of nature, or the candid smiles of loved ones, my goal is to preserve those fleeting moments in a 
          way that feels both authentic and timeless.
        </p>
        <p>
          My style is a blend of traditional and contemporary, ensuring that your photos are not only beautiful but 
          also reflective of your unique personality and the essence of the moment. I believe in the power of natural 
          light and the importance of making my subjects feel comfortable in front of the camera.
        </p>
        <p>
          Let's create something beautiful together. Whether you're planning a wedding, a family portrait session, or 
          simply want to capture the beauty of the everyday, I'm here to help you preserve your most cherished memories.
        </p>
      </header>

      <section className="portfolio-gallery">
        <div className="portfolio-item">
          <img src='/images/photographer/photographer2.jpg' alt="A beautiful wedding moment captured by John Doe" />
        </div>
        <div className="portfolio-item">
          <img src='/images/photographer/photographer3.jpg' alt="A candid moment during a portrait session by John Doe" />
        </div>
        <div className="portfolio-item">
          <img src='/images/photographer/photographer4.jpg' alt="Stunning nature photography by John Doe" />
        </div>
      </section>

      <div className="book-button-container">
        <button className="book-button" onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  );
};

export default JohnDoePhotography;
