import React from 'react';

import './index.css';

function Projects() {
  return (
    <section className="project" id="project">
      <div className="max-width">
        <h2 className="title">Projetos</h2>
        <div className="project-content">
          <div className="card">
            <div className="box">
              <a
                href="https://math-quiz-chi.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/math-quiz.png"
                  alt="Jogo de questões matemáticas"
                />
                <div className="text">
                  Math Quiz
                  <div className="tags">
                    <div className="tag">HTML5</div>
                    <div className="tag">CSS3</div>
                    <div className="tag">JavaScript</div>
                    <div className="tag">JQuery</div>
                  </div>
                </div>
              </a>
              <details>
                <summary>Descrição</summary>
                <p>
                  Realizado no curso técnico em dupla, primeiro jogo realizado
                  com jquery.
                </p>
              </details>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <a
                href="https://normaliza.ifb.edu.br/doku.php"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/NORMALIZA.png"
                  alt="site NORMALIZA - 2º EDIÇÃO"
                />
                <div className="text">
                  NORMALIZA IFB
                  <div className="tags">
                    <div className="tag">HTML5</div>
                    <div className="tag">CSS3</div>
                    <div className="tag">DOKUWIKI</div>
                  </div>
                </div>
              </a>
              <details>
                <summary>Descrição</summary>
                <p>
                  Participação no Normaliza IFB, responsável pela inserção de
                  contéudo e implementações na página web.
                </p>
              </details>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <a
                href="https://to-do-list-six-kohl.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/to-do-list.png"
                  alt="Aplicação Web de Lista de tarefas"
                />
                <div className="text">
                  To-Do-List
                  <div className="tags">
                    <div className="tag">ReactJS</div>
                    <div className="tag">JavaScript</div>
                  </div>
                </div>
              </a>
              <details>
                <summary>Descrição</summary>
                <p>
                  Lista de tarefas em react, que está consumindo uma API que
                  insere alguns dados fixo.
                </p>
              </details>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <a
                href="https://github.com/Feliper-Silva/to-do-list-express"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/todolist1.png"
                  alt="Aplicação Web de Lista de tarefas"
                />
                <div className="text">
                  Lista de Tarefa
                  <div className="tags">
                    <div className="tag">EJS</div>
                    <div className="tag">Bulma Css3</div>
                    <div className="tag">NodeJS</div>
                    <div className="tag">Express</div>
                  </div>
                </div>
              </a>
              <details>
                <summary>Descrição</summary>
                <p>
                  App com front e back-end dinâmicos, com banco não relacional.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
