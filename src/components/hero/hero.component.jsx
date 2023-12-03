import logoHeading from "../../img/logo-4-black.jpg";

import "./hero.styles.css";

const Hero = () => {
  return (
    <div className="hero">
      <p>Authentic Thai</p>
      <div className="logo-title-container">
        <img src={logoHeading} alt="logo" />
      </div>
      <a href="./pages/menu.html" className="hero-btn">
        Explore Menu
      </a>
    </div>
  );
};
export default Hero;
