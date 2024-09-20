import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { FaUserAlt, FaLock, FaEnvelope, FaTimes, FaPhone, FaTags, FaMapMarkerAlt } from 'react-icons/fa';
// import Validation from '../SignupValidation';
import './Signup.css';

function Signup() {

    const navigate = useNavigate();


    const [name, setName] = useState()
    const [role, setRole] = useState('')
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    
    //     axios.post('http://localhost:3001/signup', { name, role, email, password })
    //         .then(result => {
    //             console.log(result);
    //             if (role === 'user') {
    //                 navigate('/home');  // Navigate to home page if role is "user"
    //             } else if (role === 'vendor') {
    //                 navigate('/gallery');  // Navigate to vendor page if role is "vendor"
    //             } 
    //         })
    //         .catch(err => console.log(err));
    // };


    const handleSubmit = (event) => {
        event.preventDefault();
    
        // If the role is "vendor", add vendor-specific fields
        if (role === 'vendor') {
            

            axios.post('http://localhost:3001/signup', { name, role, email, password, phone, type, location })
            .then(result => {
                console.log(result);
                if (role === 'user') {
                    navigate('/home');  // Navigate to home page if role is "user"
                } else if (role === 'vendor') {
                    navigate('/gallery');  // Navigate to vendor page if role is "vendor"
                } 
            })
            .catch(err => console.log(err));
        }
    
        axios.post('http://localhost:3001/signup', { name, role, email, password })
            .then(result => {
                console.log(result);
                if (role === 'user') {
                    navigate('/home');  // Navigate to home page if role is "user"
                } else if (role === 'vendor') {
                    navigate('/gallery');  // Navigate to vendor page if role is "vendor"
                } 
            })
            .catch(err => console.log(err));
    };
    
    
    
    return (
        <div className="signup-container">
            <div className="signup-background"></div>
            <div className="signup-box">
            <button className="close-button" onClick={() => navigate('/welcome')}>
          <FaTimes />
        </button>
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <FaUserAlt className="icon" />
                        <input 
                            type="text" 
                            placeholder="Enter Name" 
                            name="name" 
                            autoComplete='off'
                            // onChange={handleInput}  
                            onChange = {(e) => setName(e.target.value)}
                            required 
                        />
                        {/* {errors.username && <span>{errors.username}</span>} */}
                    </div>

                    
                    
                    <div className="input-group">
                        <FaEnvelope className="icon" />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            name="email" 
                            autoComplete='off'
                            // onChange={handleInput}  
                            onChange = {(e) => setEmail(e.target.value)}
                            required 
                        />
                        {/* {errors.email && <span>{errors.email}</span>} */}
                    </div>

                    <div className="input-group">
                        <FaLock className="icon" />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            autoComplete='off'
                            // onChange={handleInput} 
                            onChange = {(e) => setPassword(e.target.value)}
                            required 
                        />
                        {/* {errors.password && <span>{errors.password}</span>} */}
                    </div>

                    <div className="input-group">
                        {/* <FaUserAlt className="icon" /> */}
                        <select 
                            name="role" 
                            placeholder="Enter Role"
                            value={role} 
                            onChange={(e) => setRole(e.target.value)} 
                            required
                        >
                            <option value="" disabled>Select Role</option>
                            <option value="user">User</option>
                            <option value="vendor">Vendor</option>
                        </select>
                    </div>

                    {role === 'vendor' && (
                        <>
                            <div className="input-group">
                            <FaPhone className="icon" />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    name="phone"
                                    autoComplete='off'
                                    onChange={(e) => setPhone(e.target.value)}
                                    required={role === 'vendor'}
                                />
                            </div>

                            <div className="input-group">
                            <FaTags className="icon" />
                                <input
                                    type="text"
                                    placeholder="Type of Vendor (e.g., Caterer, Photographer)"
                                    name="type"
                                    autoComplete='off'
                                    onChange={(e) => setType(e.target.value)}
                                    required={role === 'vendor'}
                                />
                            </div>

                            <div className="input-group">
                            <FaMapMarkerAlt className="icon" />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    name="location"
                                    autoComplete='off'
                                    onChange={(e) => setLocation(e.target.value)}
                                    required={role === 'vendor'}
                                />
                            </div>
                        </>
                    )}
                    
                    <button type="submit" className="signup-btn">Sign Up</button>
                    <p>Already have an account?</p>
                    <a href="/login" className="back-to-login">Login</a>
                </form>
            </div>
        </div>
    );
};

export default Signup;
