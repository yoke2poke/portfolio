import React, { useEffect } from "react";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {

 const [menuOpen,setMenuOpen] = useState(false)
 
  const [color, setColor] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY && window.scrollY > 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <nav id="nav" className={color ? ".nav active" : "nav"}>
        <h1>MyFolio</h1>
        <div className="hamburger-menu">
          <button id="hamburger" onClick={() => {
            setMenuOpen(!menuOpen)
            
          }}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          </button>
        </div>
        <ul>
          <li className={menuOpen ? "open" : ""}>
            <a href="#Home">Home</a>
          </li>
          <li className={menuOpen ? "open" : ""}>
            <a href="#About">About</a>
          </li>
          <li className={menuOpen ? "open" : ""}>
            <a href="#services">Services</a>
          </li>
          <li className={menuOpen ? "open" : ""}>
            <a href="#Projects">Projects</a>
          </li>
          <li className={menuOpen ? "open" : ""}>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
