import React, { useState, useEffect } from 'react';
import '../../App.css';

interface CarouselProps {
  images: string[];
  interval: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval }) => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (startIndex + 1) % images.length;
      setStartIndex(nextIndex);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [startIndex, images.length, interval]);

  return (
    <div className="carousel">
      <div className="carousel-content">
        <img
          src={images[startIndex]}
          alt={`Image ${startIndex + 1}`}
          className="carousel-image main-image"
        />
        <div className="carousel-overlay">
          <h1>Patient Health Record</h1>
          <h2>Health Partner for life</h2>
          <a className="nav-link-middle" href="/signin">
          <button>Register</button>
          </a>
        </div>
      </div>
      <div className="image-scroll">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`carousel-image ${index === startIndex ? 'hidden' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
