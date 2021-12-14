import React from 'react';
import Slideshow from './Slideshow';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">Projetos</h2>
        <div className="card">
          <div className="box">
            <Slideshow />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
