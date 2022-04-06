import React from "react";
import "./index.css";

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
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>CSS3</span>
                </div>
                <div className="line css"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                </div>
                <div className="line javascript"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>React - estudando</span>
                </div>
                <div className="line react"></div>
              </div>
            </div>

            <div className="column center">
              <div className="text">Soft Skills</div>
              <div className="bars">
                <div className="info">
                  <span>Comunicação</span>
                </div>
                <div className="line comunication"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Criatividade</span>
                </div>
                <div className="line creativity"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Colaboração</span>
                </div>
                <div className="line collaboration"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Empatia</span>
                </div>
                <div className="line empathy"></div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Back-End</div>

              <div className="bars">
                <div className="info">
                  <span>NodeJs</span>
                </div>
                <div className="line nodejs"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Express</span>
                </div>
                <div className="line express"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>MySql</span>
                </div>
                <div className="line mysql"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Postgres</span>
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
