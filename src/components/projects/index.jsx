import React from 'react';

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
            </div>
          </div>
          <div className="card">
            <div className="box">
              <a
                href="https://normaliza.ifb.edu.br/doku.php"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/NORMALIZA.png" alt="" />
                <div className="text">
                  NORMALIZA
                  <div className="tags">
                    <div className="tag">HTML5</div>
                    <div className="tag">CSS3</div>
                    <div className="tag">DOKUWIKI</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
