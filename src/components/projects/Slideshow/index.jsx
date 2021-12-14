import React, { useRef, useEffect } from 'react';

const Slideshow = () => {
  const Slideshow = useRef(null);
  const intervalSlideShow = useRef(null);
  const next = () => {
    if (Slideshow.current.children.length > 0) {
      const firstElement = Slideshow.current.children[0];

      Slideshow.current.style.transition = '300ms ease-out all';
      const size = Slideshow.current.children[0].offsetWidth;
      Slideshow.current.style.transform = `translateX(-${size}px)`;

      const transition = () => {
        Slideshow.current.style.transition = 'none';
        Slideshow.current.style.transform = `translateX(0)`;

        Slideshow.current.appendChild(firstElement);

        Slideshow.current.removeEventListener('transitionend', transition);
      };
      Slideshow.current.addEventListener('transitionend', transition);
    }
  };
  const previous = () => {
    if (Slideshow.current.children.length > 0) {
      const index = Slideshow.current.children.length - 1;
      const lastElement = Slideshow.current.children[index];
      Slideshow.current.insertBefore(lastElement, Slideshow.current.firstChild);
      Slideshow.current.style.transition = 'none';

      const size = Slideshow.current.children[0].offsetWidth;
      Slideshow.current.style.transform = `translateX(-${size}px)`;

      setTimeout(() => {
        Slideshow.current.style.transition = '300ms ease-out all';
        Slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };
  useEffect(() => {
    intervalSlideShow.current = setInterval(() => {
      next();
    }, 5000);
    Slideshow.current.addEventListener('mouseenter', () => {
      clearInterval(intervalSlideShow.current);
    });
    Slideshow.current.addEventListener('mouseleave', () => {
      intervalSlideShow.current = setInterval(() => {
        next();
      }, 3000);
    });
  }, []);
  return (
    <div className="slide-container">
      <div className="sliderShow" ref={Slideshow}>
        <div className="slider">
          <a
            href="https://math-quiz-chi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/math-quiz.png" alt="Jogo de questões matématica" />
          </a>
          <div className="text-slider">
            <p>
              Um jogo de questões matemática, feito com HTML5, CSS e JavaScript
              + JQuery.
            </p>
          </div>
        </div>
        <div className="slider">
          <a
            href="https://normaliza.ifb.edu.br/doku.php"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/NORMALIZA.png" alt="site acadêmico do IFB" />
          </a>
          <div className="text-slider">
            <p>Site educacional do Instituto Federal de Brasília.</p>
          </div>
        </div>
        <div className="slider">
          <a href="hht">
            <video loop autoPlay muted>
              <source src="/video/project-matha.mp4" type="video/mp4"></source>
              Your browser not support the video tag.
            </video>
          </a>
          <div className="text-slider">
            <p>
              Um jogo de questões matemática, feito com HTML5, CSS e JavaScript
              + JQuery.
            </p>
          </div>
        </div>
      </div>
      <div className="controllers">
        <button className="button left">
          <ion-icon name="play-back-outline" onClick={previous}></ion-icon>
        </button>
        <button className="button right" onClick={next}>
          <ion-icon name="play-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
