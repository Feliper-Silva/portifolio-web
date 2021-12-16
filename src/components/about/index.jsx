import React from 'react';

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
              Sou Felipe e sou <span>Desenvolvedor Web</span>
              <p>
                Formado como técnico em desenvolvimento de sistemas. Atuando a
                mais de 1 ano como Desenvolvedor Web, conhecimentos atuais em
                Back-end. Mas estou me especializando para ser um Desenvolvedor
                Full stack.
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
