import { useEffect, useState, useReducer } from "react";

import item31 from "../../img/31.jpg";
import item42 from "../../img/42.jpg";
import item53 from "../../img/53.jpg";
import logoHeading from "../../img/logo-4-black.jpg";

import "./carousel.styles.css";

const Carousel = () => {
  useEffect(() => {
    const track = document.querySelector(".carousel__track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel__button--right");
    const prevButton = document.querySelector(".carousel__button--left");
    const dotsNav = document.querySelector(".carousel__nav");
    const dots = Array.from(dotsNav.children);

    const slideWidth = slides[0].getBoundingClientRect().width;

    // console.log(slideWidth);

    // arrange the slides next to one another
    // slides[0].style.left = 0;
    // slides[1].style.left = slideWidth + "px";

    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + "px";
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = "translateX(-" + targetSlide.style.left;
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
    };

    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove("current-slide");
      targetDot.classList.add("current-slide");
    };

    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
      if (targetIndex === 0) {
        prevButton.classList.add("is-hidden");
        nextButton.classList.remove("is-hidden");
      } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.add("is-hidden");
      } else {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.remove("is-hidden");
      }
    };

    // when I click left, move slides to the left
    prevButton.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const currentSlide = track.querySelector(".current-slide");
      const prevSlide = currentSlide.previousElementSibling;
      const currentDot = dotsNav.querySelector(".current-slide");
      const previousDot = currentDot.previousElementSibling;
      const prevIndex = slides.findIndex((slide) => slide === prevSlide);

      moveToSlide(track, currentSlide, prevSlide);
      updateDots(currentDot, previousDot);
      hideShowArrows(slides, prevButton, nextButton, prevIndex);
    });

    // when I click right, move slides to the right
    nextButton.addEventListener("click", (e) => {
      // e.stopPropagation();
      // e.preventDefault();
      e.stopImmediatePropagation();

      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;
      const currentDot = dotsNav.querySelector(".current-slide");
      const nextDot = currentDot.nextElementSibling;
      const nextIndex = slides.findIndex((slide) => slide === nextSlide);

      moveToSlide(track, currentSlide, nextSlide);
      updateDots(currentDot, nextDot);
      hideShowArrows(slides, prevButton, nextButton, nextIndex);
    });
    console.log("rerender");

    // when I click the nav indicators, move to that slide

    dotsNav.addEventListener("click", (e) => {
      // e.stopPropagation();
      // e.preventDefault();
      e.stopImmediatePropagation();
      // what indicator was clicked on?
      const targetDot = e.target.closest("button");
      if (!targetDot) return;

      const currentSlide = track.querySelector(".current-slide");
      const currentDot = dotsNav.querySelector(".current-slide");

      const targetIndex = dots.findIndex((dot) => dot === targetDot);
      const targetSlide = slides[targetIndex];

      moveToSlide(track, currentSlide, targetSlide);
      updateDots(currentDot, targetDot);
      hideShowArrows(slides, prevButton, nextButton, targetIndex);
    });
  });

  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--left is-hidden">
        <i className="fas fa-chevron-left "></i>
      </button>
      <div className="carousel__track-container">
        <ul className="carousel__track">
          <li className="carousel__slide current-slide">
            <div className="hero">
              <p>Authentic Thai</p>
              <div className="logo-title-container">
                <img src={logoHeading} alt="logo" />
              </div>
              <a href="./pages/menu.html" className="hero-btn">
                Explore Menu
              </a>
            </div>
          </li>
          <li className="carousel__slide darken">
            <img className="carousel__image" src={item31} alt="" />
          </li>
          <li className="carousel__slide darken">
            <img className="carousel__image" src={item42} alt="" />
          </li>
        </ul>
      </div>
      <button className="carousel__button carousel__button--right">
        <i className="fas fa-chevron-right"></i>
      </button>

      <div className="carousel__nav">
        <div className="carousel__indicator-container">
          <button className="carousel__indicator current-slide"></button>
          <button className="carousel__indicator"></button>
          <button className="carousel__indicator"></button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
