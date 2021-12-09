import React, { useState } from 'react';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [clickBtn, setClickBtn] = useState(false);
  const [up, setUp] = useState(false);
  const [clickUp, setClickUp] = useState(0);
  const changeBackgroud = () => {
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

  window.addEventListener('scroll', changeBackgroud);
  return (
    <>
      <div
        className={up ? 'scroll-up-btn show' : 'scroll-up-btn'}
        onClick={() =>
          setClickUp(clickUp + window.AnimationEffect({ scrollTop: 0 }))
        }
      >
        <ion-icon name="chevron-up-outline"></ion-icon>
      </div>
      <nav className={navbar ? 'navbar sticky' : 'navbar'}>
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
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
          <div
            className="menu-btn"
            onClick={() =>
              setClickBtn(clickBtn ? 'menu-btn active' : 'menu-btn')
            }
          >
            <ion-icon name="menu-outline"></ion-icon>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
