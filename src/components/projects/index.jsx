import React from 'react';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">Projetos</h2>
        <div className="card">
          <div className="box">
            <video loop autoPlay muted>
              <source src="/video/project-math.mp4" type="video/mp4"></source>
              Your browser not support the video tag.
            </video>
            <div className="text">Math question</div>
            <p>
              Um jogo de questões matemática, feito com HTML5, CSS e JavaScript
              + JQuery.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <video loop autoPlay muted>
              <source src="/video/project-math.mp4" type="video/mp4"></source>
              Your browser not support the video tag.
            </video>
            <div className="text">Math question</div>
            <p>
              Um jogo de questões matemática, feito com HTML5, CSS e JavaScript
              + JQuery.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <video loop autoPlay muted>
              <source src="/video/project-math.mp4" type="video/mp4"></source>
              Your browser not support the video tag.
            </video>
            <div className="text">Math question</div>
            <p>
              Um jogo de questões matemática, feito com HTML5, CSS e JavaScript
              + JQuery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
