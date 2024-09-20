import React from 'react';
import { useParams } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const { vendorName } = useParams();
  
  // Mocked vendor portfolio data
  const portfolioData = {
    'john-doe-photography': {
      name: 'John Doe Photography',
      images: ['portfolio1.jpg', 'portfolio2.jpg', 'portfolio3.jpg'],
      description: 'Capturing moments that last forever.',
    },
    // Add more vendor data here...
  };

  const vendor = portfolioData[vendorName];

  

  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <h1>{vendor.name}</h1>
        <p>{vendor.description}</p>
      </header>

      <section className="portfolio-gallery">
        {vendor.images.map((image, index) => (
          <div key={index} className="portfolio-item">
            <img src={image} alt={`Portfolio ${index + 1}`} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
