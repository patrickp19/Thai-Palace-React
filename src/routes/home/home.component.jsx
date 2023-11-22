import { useEffect, useState } from "react";
import "./home.styles.css";
import Carousel from "../../components/carousel/carousel.component";

const Home = () => {
  const { currentSlide, setSlide } = useState(0);

  // setTimeout(() => {
  //   document.querySelector(":root").style.scrollBehavior = "smooth";
  // }, 0);

  return (
    <div>
      <Carousel />
    </div>
  );
};

export default Home;
