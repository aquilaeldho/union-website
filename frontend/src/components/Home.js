import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import HomeNav from './HomeNav';

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Photographers',
      vendors: [
        { name: 'John Doe Photography', image: '/images/photographer/photographer1.jpg', description: 'Capturing moments that last forever.' },
        { name: 'Jane Smith Studios', image: '/images/photographer/photographer1.jpg', description: 'Artistic and timeless photography.' },
        { name: 'Michael Lens', image: '/images/photographer/photographer1.jpg', description: 'Bringing your special moments to life.' },
        { name: 'Gourmet Delights', image: '/images/photographer/photographer.jpg', description: 'Exquisite cuisine for every palate.' },
      ],
    },
    {
      name: 'Caterers',
      vendors: [
        { name: 'Gourmet Delights', image: '/images/catering/catering.jpg', description: 'Exquisite cuisine for every palate.' },
        { name: 'Epicurean Events', image: '/images/catering/catering.jpg', description: 'Delicious food, beautifully presented.' },
        { name: 'Fine Dine Caterers', image: '/images/catering/catering.jpg', description: 'Culinary excellence for your big day.' },
        { name: 'Gourmet Delights', image: '/images/catering/catering.jpg', description: 'Exquisite cuisine for every palate.' },
      ],
    },
    {
        name: 'Bridal Designers',
        vendors: [
            { name: 'Jane Smith Studios', image: '/images/gown/designer1.jpg', description: 'Artistic and timeless photography.' },
          { name: 'John Doe Photography', image: '/images/gown/designer1.jpg', description: 'Capturing moments that last forever.' },
          { name: 'Jane Smith Studios', image: '/images/gown/designer1.jpg', description: 'Artistic and timeless photography.' },
          { name: 'Gourmet Delights', image: '/images/gown/designer1.jpg', description: 'Exquisite cuisine for every palate.' },
        ],
      },
      {
        name: 'Hosts',
        vendors: [
            { name: 'Michael Lens', image: '/images/hosts/host3.jpg', description: 'Bringing your special moments to life.' },
          { name: 'John Doe Photography', image: '/images/hosts/host3.jpg', description: 'Capturing moments that last forever.' },
          { name: 'Michael Lens', image: '/images/hosts/host3.jpg', description: 'Bringing your special moments to life.' },
          { name: 'Gourmet Delights', image: '/images/hosts/host3.jpg', description: 'Exquisite cuisine for every palate.' },
        ],
      },
    // Add more categories here...
  ];

  const handleVendorClick = (vendorName) => {
    navigate(`/${vendorName.replace(/\s+/g, '-').toLowerCase()}`);
  };

  return (
    
    <div className="homepage">
        <HomeNav />
      <header className="header">
        <h1>Book Your Dream Team</h1>
        <p>Select from our top vendors to make your event unforgettable.</p>
      </header>

      <section className="vendor-categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <h2>{category.name}</h2>
            <div className="vendor-list">
              {category.vendors.map((vendor, idx) => (
                <div 
                  key={idx} 
                  className="vendor"
                  onClick={() => handleVendorClick(vendor.name)}
                >
                  <img src={vendor.image} alt={vendor.name} />
                  <h3>{vendor.name}</h3>
                  <p>{vendor.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
