// ContactUs.js
import React, { useState } from 'react';
import HomeNav from './HomeNav';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Contact.css'; // Import the CSS file

const ContactHome = ({ onClose }) => {
    const navigate = useNavigate();
    
    const [isPageVisible, setIsPageVisible] = useState(true);

    const handleClose = () => {
        setIsPageVisible(false);
        setTimeout(() => {
            navigate("/welcome"); // Navigate back to the previous page after the transition
        }, 300); // Match the transition duration
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been sent!");
        // Handle form submission here
    };

    return (
        <div className={`contact-page-wrapper ${isPageVisible ? 'visible' : 'hidden'}`}>
            <HomeNav />
            <div className="contact-page">
            <button className="close-button" onClick={() => navigate('/home')}>
          <FaTimes />
        </button>
                <h2 className="contact-title">Contact Us</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactHome;
