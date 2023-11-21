import { useEffect, useState } from "react";
import "./home.styles.css";

import logoHeading from "../../img/logo-4-black.jpg";

import item31 from "../../img/31.jpg";
import item42 from "../../img/42.jpg";

const Home = () => {
  const { currentSlide, setSlide } = useState(0);
  useEffect(() => {
    const track = document.querySelector(".carousel__track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel__button--right");
    const prevButton = document.querySelector(".carousel__button--left");
    const dotsNav = document.querySelector(".carousel__indicator-container");
    const dots = Array.from(dotsNav.children);

    const slideWidth = slides[0].getBoundingClientRect().width;

    // arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
      console.log("slide", slide);
      slide.style.left = slideWidth * index + "px";
    };
    const moveToSlide = (currentSlide, targetSlide) => {
      // console.log(track);
      console.log("track", track);
      console.log(track.style.transform);
      track.style.transform = `translateX(-${targetSlide.style.left})`;
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
    };

    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove("current-slide");
      targetDot.classList.add("current-slide");
    };

    const hideShowArrows = (targetIndex) => {
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

    slides.forEach(setSlidePosition);

    // when I click left, move slides to the left
    prevButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const prevSlide = currentSlide.previousElementSibling;
      const currentDot = dotsNav.querySelector(".current-slide");
      const prevDot = currentDot.previousElementSibling;
      const prevIndex = slides.findIndex((slide) => slide === prevSlide);
      moveToSlide(currentSlide, prevSlide);
      updateDots(currentDot, prevDot);
      hideShowArrows(prevIndex);
    });

    // when I click right, move slides to the right
    nextButton.addEventListener("click", (e) => {
      console.log("run");
      // prevButton.classList.add("is-hidden");
      // nextButton.classList.add("is-hidden");
      // console.log("okay");
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;
      const currentDot = dotsNav.querySelector(".current-slide");
      const nextDot = currentDot.nextElementSibling;
      const nextIndex = slides.findIndex((slide) => slide === nextSlide);
      console.log("nextSlide", nextSlide);
      moveToSlide(currentSlide, nextSlide);
      updateDots(currentDot, nextDot);
      hideShowArrows(nextIndex);
    });

    // when I click the nav indicators, move to that slide
    dotsNav.addEventListener("click", (e) => {
      // find what indicator was clicked on
      // note: could make event listener for each dot but would decrease performance. better to minimize number of event listeners on DOM
      const targetDot = e.target.closest("button");

      if (!targetDot) return;

      const currentSlide = track.querySelector(".current-slide");
      const currentDot = dotsNav.querySelector(".current-slide");
      const targetIndex = dots.findIndex((dot) => dot === targetDot);
      const targetSlide = slides[targetIndex];

      moveToSlide(currentSlide, targetSlide);
      updateDots(currentDot, targetDot);
      hideShowArrows(targetIndex);
    });

    setTimeout(() => {
      document.querySelector(":root").style.scrollBehavior = "smooth";
    }, 0);
  });
  return (
    <div>
      <div className="carousel">
        <button className="carousel__button carousel__button--left is-hidden">
          <i className="fas fa-chevron-left is-hidden"></i>
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
    </div>
  );
};

export default Home;
