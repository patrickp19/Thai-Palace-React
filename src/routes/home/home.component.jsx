import { useEffect, useState } from "react";
import "./home.styles.css";
import Carousel from "../../components/carousel/carousel.component";
import Hero from "../../components/hero/hero.component";
import ImageSlide from "../../components/image-slide/image-slide";
import item31 from "../../img/31.jpg";
import item42 from "../../img/42.jpg";
import item53 from "../../img/53.jpg";

const Home = () => {
  let imageArray = [item31, item42, item53];
  // const { currentSlide, setSlide } = useState(0);
  let carouselImageSlides = imageArray.map((img) => {
    return <ImageSlide image={img} />;
  });
  const carouselSlides = [<Hero />].concat(carouselImageSlides);
  setTimeout(() => {
    document.querySelector(":root").style.scrollBehavior = "smooth";
  }, 0);

  return (
    <div>
      <Carousel slideItems={carouselSlides} />
    </div>
  );
};

export default Home;
