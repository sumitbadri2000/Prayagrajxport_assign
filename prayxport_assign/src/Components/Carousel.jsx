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
    <div className="overlay">
      <div className="carousel-container">
        <div className="carousel-slide">
          <img
            src="https://www.haldirams.com/media/wysiwyg/Website_Festival_of_Lights_1_1_.png"
            alt="Product 1"
          />
        </div>
        <div className="carousel-slide">
          <img
            src="https://www.haldirams.com/media/wysiwyg/Web_Free_Diya_Offer_1_.png"
            alt="Product 2"
          />
        </div>
        <div className="carousel-slide">
          <img
            src="https://www.haldirams.com/media/wysiwyg/HDFC-Banner_1_1_1_.jpg"
            alt="Product 3"
          />
        </div>
        <div className="carousel-slide">
          <img
            src="https://www.haldirams.com/media/wysiwyg/Sugar_Free_Web_1920x600px.jpg"
            alt="Product 4"
          />
        </div>
        <div className="carousel-slide">
          <img
            src="https://www.haldirams.com/media/wysiwyg/Web_Sweets_Banner_1.png"
            alt="Product 5"
          />
        </div>
        <div className="carousel-slide">
          <img
            src="https://www.haldirams.com/media/wysiwyg/Final_Loyatly_Program_Banner-Desk-new_1.jpg"
            alt="Product 6"
          />
        </div>
      </div>
      <div className="flex_button">
        <button className="prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="next" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
