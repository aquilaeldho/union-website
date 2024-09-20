import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Gallery.css";
import Navbar from "./Navbar";


function Gallery() {
  const navigate = useNavigate();
    
    const [isPageVisible, setIsPageVisible] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [visiblePhotos, setVisiblePhotos] = useState(10);

  const photos = [
    "/images/wedding/wedding1.jpg",
    "/images/wedding/wedding2.jpg",
    "/images/wedding/wedding4.jpg",
    "/images/wedding/wedding5.jpg",
    "/images/wedding/wedding5.jpg",
    "/images/wedding/wedding1.jpg",
    "/images/wedding/wedding2.jpg",
    "/images/wedding/wedding4.jpg",
  
    
  ];

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };



  const handleClosePhoto = () => {
    setSelectedPhoto(null);
  };

  const handleClose = () => {
    setIsPageVisible(false);
    setTimeout(() => {
        navigate("/welcome"); 
    }, 300); 
};

  return (
    <>
      <Navbar />
      <div className="gallery-container">
      <button className="close-button" onClick={handleClose}>&times;</button>
        <h2 className="gallery-title">GALLERY</h2>
        <hr />
        <br />
        <div className="gallery-grid">
          {photos.slice(0, visiblePhotos).map((photo, index) => (
            <div key={index} className="gallery-item">
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="gallery-image"
                onClick={() => handlePhotoClick(photo)}
              />
            </div>
          ))}
        </div>

      

        {selectedPhoto && (
          <div className="modal-overlay" onClick={handleClosePhoto}>
            <div className="modal-content">
              <img src={selectedPhoto} alt="Selected" className="modal-image" />
              <button onClick={handleClosePhoto} className="close-button">
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
      
    </>
  );
}

export default Gallery;

