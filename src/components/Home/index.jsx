import React from 'react';
import './index.css';

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Olá, meu nome é</div>
            <div className="text-2">Felipe Silva</div>
            <div className="text-3">
              eu sou <span>Desenvolvedor Web</span>
            </div>
            <a
              href="https://www.linkedin.com/in/feliper-silva/"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              href="https://github.com/Feliper-Silva"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
