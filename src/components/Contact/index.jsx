import React from 'react';

import './index.css';

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contato</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Fale Comigo</div>
              <p>
                Vamos realizar um projeto junto, bora? <br />
                Preencha os campos abaixo ou ao lado com os seus dados que em
                breve entarei em contato.
              </p>
              <div className="icons">
                <div className="row">
                  <ion-icon name="person-circle-outline"></ion-icon>
                  <div className="info">
                    <div className="head">Nome: </div>
                    <div className="sub-title">Felipe Silva</div>
                  </div>
                </div>
                <div className="row">
                  <ion-icon name="earth-outline"></ion-icon>

                  <div className="info">
                    <div className="head">Endereço: </div>
                    <div className="sub-title">Brasília, DF</div>
                  </div>
                </div>
                <div className="row">
                  <ion-icon name="mail-outline"></ion-icon>
                  <div className="info">
                    <div className="head">E-Mail</div>
                    <div className="sub-title">felipe726silva@gmail.com</div>
                  </div>
                </div>
                <div className="row">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                  <div className="info">
                    <div className="head">Telefone</div>
                    <div className="sub-title">(61)9-9589-1907</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Mensagem</div>
              <form
                action="https://formsubmit.co/felipe726silva@gmail.com"
                method="POST"
              >
                <div className="fields">
                  <div className="field name">
                    <input
                      type="hidden"
                      name="_next"
                      value={'https://portifolio-felipe-silva.vercel.app/#home'}
                    />
                    <input
                      type="text"
                      name="Nome"
                      id="Nome"
                      placeholder="Nome"
                      require
                    />
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      name="E-mail"
                      id="E-mail"
                      placeholder="E-Mail"
                      require
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="field">
                    <input
                      type="text"
                      name="Sobrenome"
                      id="Sobrenome"
                      placeholder="Sobrenome"
                      require
                    />
                  </div>
                  <div className="field textarea">
                    <textarea
                      name="Mensagem"
                      id="Mensagem"
                      cols="30"
                      rows="10"
                      placeholder="Escrever..."
                    ></textarea>
                  </div>
                  <div className="button">
                    <button type="submit">Enviar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
