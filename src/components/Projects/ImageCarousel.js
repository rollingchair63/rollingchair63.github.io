import React, { useState } from 'react';
import './ImageCarousel.css';

export default function ImageCarousel({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) {
    return null;
  }

  // If only one image, show it without controls
  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={alt}
        className="img-fluid rounded shadow"
        style={{ maxWidth: '100%', width: '300px' }}
      />
    );
  }

  return (
    <div className="carousel-container">
      <div className="carousel-image-wrapper">
        <img
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className="img-fluid rounded shadow"
          style={{ maxWidth: '100%', width: '300px' }}
        />
        
        {/* Previous Button */}
        <button 
          className="carousel-button carousel-button-prev"
          onClick={handlePrevious}
          aria-label="Previous image"
        >
          ←
        </button>
        
        {/* Next Button */}
        <button 
          className="carousel-button carousel-button-next"
          onClick={handleNext}
          aria-label="Next image"
        >
          →
        </button>
      </div>
      
      {/* Dot Indicators */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Image Counter */}
      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}