import { Outlet } from "react-router-dom";
import "./nav.styles.css";
import logo from "../../img/logo.jpg";

const Nav = () => {
  return (
    <div>
      <div class="container-100">
        <div class="navbar">
          <div class="logo__container">
            <a class="logo" href="/#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <input type="checkbox" id="nav-toggle" class="nav-toggle" />
          <label
            for="nav-toggle"
            class="nav-toggle-label"
            aria-label="open navigation"
          >
            <span class="hamburger"></span>
          </label>
          <nav class="nav">
            <ul>
              <li class="nav__item">
                <a
                  // href="#"
                  href="/"
                  class="nav__link"
                >
                  Home
                </a>
              </li>
              <li class="nav__item">
                <a href="#about" class="nav__link">
                  About
                </a>
              </li>
              <li class="nav__item">
                <a
                  // href="./pages/menu.html"
                  href="./menu"
                  class="nav__link"
                >
                  Menu
                </a>
              </li>
              <li class="nav__item">
                <a
                  href="https://www.clover.com/online-ordering/thai-palace-59901-kalispell"
                  class="nav__link"
                >
                  Order Online
                </a>
              </li>
              <li class="nav__item">
                <a href="./pages/menu.html" class="nav__link">
                  Sign In
                </a>
              </li>
              <li class="nav__item">
                <a href="./pages/menu.html" class="nav__link">
                  Register
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
