import React from 'react';
import './index.css';

function Skills() {
  return (
    <>
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">Especialidades</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">Front-End</div>
              <div className="bars">
                <div className="info">
                  <span>HTML5</span>
                  <span>75%</span>
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
                  <span>75%</span>
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
            </div>

            <div className="column center">
              <div className="text">Soft Skills</div>
              <div className="bars">
                <div className="info">
                  <span>Comunicação</span>
                  <span>75%</span>
                </div>
                <div className="line comunication"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Criatividade</span>
                  <span>65%</span>
                </div>
                <div className="line creativity"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Colaboração</span>
                  <span>73%</span>
                </div>
                <div className="line collaboration"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Empatia</span>
                  <span>85%</span>
                </div>
                <div className="line empathy"></div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Back-End</div>

              <div className="bars">
                <div className="info">
                  <span>NodeJs</span>
                  <span>75%</span>
                </div>
                <div className="line nodejs"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Express</span>
                  <span>53%</span>
                </div>
                <div className="line express"></div>
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
