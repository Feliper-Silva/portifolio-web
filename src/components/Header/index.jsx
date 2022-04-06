import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import "./index.css";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [up, setUp] = useState(false);

  const ClickBtn = () => {
    const navMenu = document.querySelector(".navbar .menu");
    const menu = document.querySelector(".menu-btn");
    navMenu.classList.toggle("active");
    menu.classList.toggle("active");
  };
  const changeBackground = () => {
    if (window.scrollY > 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    if (window.scrollY > 500) {
      setUp(true);
    } else {
      setUp(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div
        className={up ? "scroll-up-btn show" : "scroll-up-btn"}
        onClick={() => scroll.scrollToTop()}
      >
        <ion-icon name="chevron-up-outline"></ion-icon>
      </div>
      <nav className={navbar ? "navbar sticky" : "navbar"}>
        <div className="max-width">
          <div className="logo">
            <a href="/home">
              Port<span>fólio</span>
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#skills">Especialidades</a>
            </li>
          </ul>
          <div className="menu-btn">
            <ion-icon name="menu-outline" onClick={ClickBtn}></ion-icon>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
