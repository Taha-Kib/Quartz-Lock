import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import './Nav.css';
import Logo from '../../Assets/Logo.png';


function Nav() {
  const navRef = useRef();

  const showNavBar = () => {
    //whenever this function is called, we are adding/removing responsive_nav from classList
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
      <img src={Logo} className = "chemical-logo" alt="app__logo" />
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">Epoxy Grouts</a>
          <a href="/#">Application</a>
          <a href="/#">Documentation</a>
          <a href="/contact">Contact</a>
          <button className = "nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className = "nav-btn"onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Nav;
