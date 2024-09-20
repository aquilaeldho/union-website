import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Welcome.css';

const Welcome = () => {

    const navigate = useNavigate();

    const handleButtonClick = (destination) => {
    if (destination === 'signup') {
      navigate('/signup'); // Navigate to the signup page
    } else if (destination === 'gallery') {
      navigate('/gallery'); // Navigate to the gallery page
    }
  };



  return (
    <div className="welcome-page">
      <Navbar />
      <div className="hero-section">
        <div className="hero-text">
          <h1>Your Precious Memories</h1>
          <h2>Captured Forever</h2>
          
        </div>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => handleButtonClick('signup')}>Get Started</button>
          <button className="secondary-btn" onClick={() => handleButtonClick('gallery')}>Vist Our Gallery</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;




// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';
// // import { Link } from 'react-router-dom';
// import './Welcome.css';



// function Welcome() {
//   const navigate = useNavigate();

//   const handleButtonClick = (destination) => {
//     if (destination === 'signup') {
//       navigate('/signup'); // Navigate to the signup page
//     } else if (destination === 'gallery') {
//       navigate('/gallery'); // Navigate to the gallery page
//     }
//   };


//   return (
    
//     <div>
//       <Navbar />

//       <section className="hero-section" style={{ backgroundImage: `url('https://www.shutterstock.com/image-photo/hands-newlywed-couple-love-wedding-600nw-258995456.jpg')` }}>
        
//         <div className="hero-content">
//           <h1>Wedding Planning</h1>
//           <p>Time to get organized for your big day.</p>
//           <p>Why work without a competent wedding planner? Let us guide you to perfection.</p>
//           <div className="hero-buttons">
//             <button className="primary-btn" onClick={() => handleButtonClick('signup')}>Get Started</button>
//             <button className="secondary-btn" onClick={() => handleButtonClick('gallery')}>Vist Our Gallery</button>
//           </div>
//         </div>
//       </section>
//       </div>
//   );
// }

// export default Welcome;