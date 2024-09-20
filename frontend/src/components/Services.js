// Services.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Services.css'; // Import the CSS file


const serviceData = [
    { 
        title: 'Hosts', 
        description: 'Professional hosts to ensure your event runs smoothly.',
        imageUrl: '/images/hosts/host4.jpg'
    },

    { 
        title: 'Catering', 
        description: 'Delicious food options to suit every taste and dietary need.',
        imageUrl: '/images/catering/catering.jpg'
    },
    
    { 
        title: 'Decoration', 
        description: 'Beautiful decorations tailored to your theme.',
        imageUrl: '/images/venue/venue.jpg'
    },
    { 
        title: 'Music', 
        description: 'Live bands or DJs to keep the party going.',
        imageUrl: '/images/music/dj1.jpg'
    },
    { 
        title: 'Photography', 
        description: 'Capture every moment with our professional photographers.',
        imageUrl: '/images/photographer/photographer1.jpg'
    }
];

const Services = ({ onClose }) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isPageVisible, setIsPageVisible] = useState(true);

    useEffect(() => {
        setIsVisible(true);
    }, [currentIndex]);

    const handleNext = () => {
        setIsVisible(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceData.length);
        }, 300);
    };

    const handlePrev = () => {
        setIsVisible(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + serviceData.length) % serviceData.length);
        }, 300);
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            navigate("/welcome"); // Navigate back to the previous page after the transition
        }, 300); // Match the transition duration
    };

    return (
        <div className={`services-page-wrapper ${isPageVisible ? 'visible' : 'hidden'}`}>
            <Navbar />
            <div className="services-page">
            <button className="close-button" onClick={() => navigate('/welcome')}>
          <FaTimes />
        </button>
                <div className="service-box-wrapper">
                
                    <div className={`service-box ${isVisible ? 'visible' : 'hidden'}`}>
                        <img 
                            src={serviceData[currentIndex].imageUrl} 
                            alt={serviceData[currentIndex].title} 
                            className="service-image" 
                        />
                        <h2 className="service-title">{serviceData[currentIndex].title}</h2>
                        <p className="service-description">{serviceData[currentIndex].description}</p>
                    </div>
                    <div className="navigation-buttons">
                        <button className="prev-button" onClick={handlePrev}>&larr;</button>
                        <button className="next-button" onClick={handleNext}>&rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
