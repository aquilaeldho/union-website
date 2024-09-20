import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import { FaUserAlt, FaLock, FaEnvelope, FaTimes } from 'react-icons/fa';
// import Validation from '../LoginValidation';
import './Login.css';


function Login() {

  const navigate = useNavigate();

//   const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  // const [errors, setErrors] = useState({});
  
  // const handleInput = (event) => {
  //     setValues(prev => ({...prev, [event.target.name]: event.target.value}));
  // };
  
  const handleSubmit = async (event) => {
    console.log("Entering handleSubmit");
      event.preventDefault();
      try {
        console.log("about to post");
      const {data} = await axios.post('http://localhost:3001/login', {email, password}, {withCredentials: true});
  
      console.log(data);
    //   Cookies.set("userRole", data.role, {expires: 1});
      if (data.role === "user") navigate("/home");
      else if (data.role === "admin") navigate("/userlist");
      else if (data.role === "vendor") navigate("/gallery");
      } catch (error) {
        alert("Invalid Credentials");
      }
    //   .then(result => {
    //     console.log(result)
    //     if(result.data === "success"){

    //       navigate('/gallery')
    //     } else if(result.data === "fail"){
    //         console.log("The Username/Password is incorrect")
    //     }
    //   })
    //   .catch(err => console.log(err))


      // event.preventDefault();
      // const validationErrors = Validation(values);
      // setErrors(validationErrors);

      // if (!validationErrors.username && !validationErrors.email && !validationErrors.password) {
      //     // Send data to the backend
      //     axios.post('http://localhost:8081/signup', values)
      //         .then(response => {
      //             console.log('Signup successful:', response.data);
      //             navigate('/home');
      //         })
      //         .catch(error => {
      //             console.error('There was an error!', error);
      //         });
      // }
  };

  return (
      <div className="login-container">
          <div className="login-background"></div>
          <div className="login-box">
          <button className="close-button" onClick={() => navigate('/welcome')}>
          <FaTimes />
        </button>
              <h2>Log In</h2>
              <form onSubmit={handleSubmit}>
                  
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
                  
                  <button type="submit" className="login-btn">Login</button> 
                  <p>Don't have an account?</p>
                    <a href="/signup" className="back-to-login">Sign Up</a>
                  
              </form>
          </div>
      </div>
  );
};



export default Login;
