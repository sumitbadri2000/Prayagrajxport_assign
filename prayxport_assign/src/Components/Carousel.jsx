import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlide = (index) => {
    let slides = document.querySelectorAll(".carousel-slide");

    if (index < 0) {
      setSlideIndex(slides.length - 1);
    } else if (index >= slides.length) {
      setSlideIndex(0);
    } else {
      setSlideIndex(index);
    }

    slides.forEach((slide, i) => {
      if (i === slideIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  };

  const nextSlide = () => {
    showSlide(slideIndex + 1);
  };

  const prevSlide = () => {
    showSlide(slideIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className="overlay" style={{ width: "90%", margin: "auto" }}>
      <div className="carousel-container">
        <div className="carousel-slide">
          <img
            src="https://www.lays.com/sites/lays.com/files/2023-09/t1t1t1t1t1t1t1t1t1%20%281%29.png"
            alt="Product 1"
          />
        </div>

        <div className="carousel-slide">
          <img
            src="https://www.lays.com/sites/lays.com/files/2023-08/Lay%C2%B4s%20Veggie%20Poppables%20desktop%20%281%29.png"
            alt="Product 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
