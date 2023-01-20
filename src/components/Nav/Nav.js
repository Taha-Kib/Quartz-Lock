import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";
import Logo from "../../Assets/Logo.png";

function Nav() {
  const navRef = useRef();

  const showNavBar = () => {
    //whenever this function is called, we are adding/removing responsive_nav from classList
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <img src={Logo} className="chemical-logo" alt="app__logo" />
        <h3 className="header-quartzlock">QUARTZLOCK</h3>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          {/* <a href="/#">Epoxy Grouts</a>
          <a href="/products">Products</a> */}
          <div className="dropdown-menu">
            <button className="menu-btn">Products</button>
            <div className="menu-content">
              <a className="links-hidden" href="#">
                Epoxy Grouts
              </a>
              <a className="links-hidden" href="#">
                Coatings
              </a>
              <a className="links-hidden" href="#">
                Potato
              </a>
            </div>
          </div>
          <a href="/#">Documentation</a>
          <a href="/contact">Contact</a>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Nav;
