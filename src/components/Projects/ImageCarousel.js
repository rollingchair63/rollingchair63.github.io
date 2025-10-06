import React, { useState } from 'react';
import './ImageCarousel.css';

export default function ImageCarousel({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePrevious = (e) => {
    e.stopPropagation(); // Prevent triggering fullscreen
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation(); // Prevent triggering fullscreen
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleFullscreenPrevious = (e) => {
    e.stopPropagation();
    handlePrevious(e);
  };

  const handleFullscreenNext = (e) => {
    e.stopPropagation();
    handleNext(e);
  };

  if (!images || images.length === 0) {
    return null;
  }

  // If only one image, show it without controls
  if (images.length === 1) {
    return (
      <>
        <img
          src={images[0]}
          alt={alt}
          className="img-fluid rounded shadow carousel-image-hover"
          style={{ maxWidth: '100%', width: '300px', cursor: 'pointer' }}
          onClick={openFullscreen}
        />
        
        {/* Fullscreen Modal */}
        {isFullscreen && (
          <div className="fullscreen-modal" onClick={closeFullscreen}>
            <button className="fullscreen-close" onClick={closeFullscreen}>
              ✕
            </button>
            <img
              src={images[0]}
              alt={alt}
              className="fullscreen-image"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-image-wrapper">
          <img
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            className="img-fluid rounded shadow carousel-image-hover"
            style={{ maxWidth: '100%', width: '300px', cursor: 'pointer' }}
            onClick={openFullscreen}
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

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <button className="fullscreen-close" onClick={closeFullscreen}>
            ✕
          </button>
          
          <img
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Fullscreen Navigation Buttons */}
          <button 
            className="fullscreen-button fullscreen-button-prev"
            onClick={handleFullscreenPrevious}
            aria-label="Previous image"
          >
            ←
          </button>
          
          <button 
            className="fullscreen-button fullscreen-button-next"
            onClick={handleFullscreenNext}
            aria-label="Next image"
          >
            →
          </button>
          
          {/* Fullscreen Dots */}
          <div className="fullscreen-dots">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`fullscreen-dot ${index === currentIndex ? 'active' : ''}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Fullscreen Counter */}
          <div className="fullscreen-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}