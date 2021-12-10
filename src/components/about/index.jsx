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
                Formado como técnico em desenvolvimento de sistemas pelo
                Instituto Federal de Brasília. No curso tive o primeiro contato
                com as tecnologias Web é gostei muito, atualmente só prático em
                projetos pessoais.
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
