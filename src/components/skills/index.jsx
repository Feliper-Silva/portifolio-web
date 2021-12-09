import React from 'react';

function Skills() {
  return (
    <>
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">Especialidades</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">Minhas habilidades</div>
              <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos. Lorem
                Ipsum sobreviveu não só a cinco séculos, como também ao salto
                para a editoração eletrônica, permanecendo essencialmente
                inalterado. Se popularizou na década de 60, quando a Letraset
                lançou decalques contendo passagens de Lorem Ipsum, e mais
                recentemente quando passou a ser integrado a softwares de
                editoração eletrônica como Aldus PageMaker.
              </p>
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>HTML5</span>
                  <span>93%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>CSS3</span>
                  <span>65%</span>
                </div>
                <div className="line css"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>73%</span>
                </div>
                <div className="line javascript"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>React - estudando</span>
                  <span>35%</span>
                </div>
                <div className="line react"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>NodeJs</span>
                  <span>75%</span>
                </div>
                <div className="line nodejs"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>MySql</span>
                  <span>53%</span>
                </div>
                <div className="line mysql"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Postgres</span>
                  <span>43%</span>
                </div>
                <div className="line postgres"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
