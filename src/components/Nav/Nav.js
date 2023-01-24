import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";
import Logo from "../../Assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";


function Nav() {

  let navigate = useNavigate()

  const navRef = useRef();

  const showNavBar = () => {
    //whenever this function is called, we are adding/removing responsive_nav from classList
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <img src={Logo} onClick={() => navigate('/')} className="chemical-logo" alt="app__logo" />
        <h3 onClick={() => navigate('/')} className="header-quartzlock">QUARTZLOCK</h3>
        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <div className="dropdown-menu">
            <button className="menu-btn">Products</button>
            <div className="menu-content">
              <Link to="/EpoxyGrouts" className="links-hidden" >Epoxy Grouts</Link>
              <Link to="/Coatings" className="links-hidden" >Coatings</Link>
              <Link to="/Potato" className="links-hidden" >Potato</Link>
            </div>
          </div>
          <Link to="/contact">Contact</Link>
          <Link to="/documentation">Documentation</Link>
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
