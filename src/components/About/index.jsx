import React from 'react';
import './index.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">Sobre</h2>
        <div className="about-content">
          <div className="colunmn left">
            <img src="/img/foto-perfil.png" alt="Foto de Felipe Silva" />
          </div>
          <div className="column right">
            <div className="text">
              <p>
                Formado em Técnico em Desenvolvimento de Sistemas, atuo há 2
                anos como Desenvolvedor Web. Possuo conhecimento atual em
                Back-end e estou me especializando para ser Desenvolvedor Full
                Stack.
              </p>
              <a download href="/curriculo/Curriculo-FelipeSilva.pdf">
                Download Cv
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
