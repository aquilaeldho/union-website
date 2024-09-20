// AboutUs.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css'; // Import the CSS file
import { FaTimes } from 'react-icons/fa';
import HomeNav from './HomeNav'; // Import the Navbar component

const AboutHome = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Trigger the transition after the component mounts
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            navigate("/welcome"); // Navigate back to the previous page after the transition
        }, 300); // Match the transition duration
    };

    return (
        <div className="about-us-page-wrapper">
            <HomeNav />
            <div className={`about-us-page ${isVisible ? 'visible' : 'hidden'}`}>
                
                <div className="about-us-container">
                <button className="close-button" onClick={() => navigate('/home')}>
          <FaTimes />
        </button>
                    <section className="intro-section">
                        <h1 className="title">About Us</h1>
                        <p className="description">
                            Welcome to UNION, your premier destination for all things wedding planning! We understand that planning the perfect wedding can be overwhelming, which is why we've created a comprehensive platform to make your journey seamless and enjoyable.
                        </p>
                    </section>
                    <section className="mission-section">
                        <h2 className="section-title">Our Mission</h2>
                        <p className="section-description">
                            At UNION, our mission is to bring your wedding dreams to life. We offer a user-friendly interface that helps you manage every aspect of your wedding, from finding the perfect bridal designers to keeping the most amazing DJ party ever.
                        </p>
                    </section>
                    <section className="team-section">
                        <h2 className="section-title">Meet the Team</h2>
                        <p className="section-description">
                            Our dedicated team of wedding enthusiasts and industry experts is here to support you every step of the way. With years of experience and a passion for creating unforgettable celebrations, we’re committed to helping you design a wedding that reflects your unique style and vision.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;
