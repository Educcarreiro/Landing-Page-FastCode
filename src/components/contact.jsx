import { useState } from "react";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  return (
    <div id="contact">
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title">
              <h2>Fale conosco</h2>
              <p>
                Por favor, preencha o formulário abaixo para nos enviar uma
                mensagem, e entraremos em contato com você o mais rápido possível.
              </p>
            </div>
            <form
              action="https://formspree.io/f/manyybnn"
              method="POST"
              onSubmit={() => clearState()} // Limpa o formulário após o envio
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name" // Atributo name corrigido
                      className="form-control"
                      placeholder="Nome"
                      required // Garante que o campo seja preenchido
                      onChange={handleChange}
                      value={name}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email" // Atributo name corrigido
                      className="form-control"
                      placeholder="Email"
                      required // Garante que o campo seja preenchido
                      onChange={handleChange}
                      value={email}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message" // Atributo name corrigido
                  className="form-control"
                  rows="4"
                  placeholder="Mensagem"
                  required // Garante que o campo seja preenchido
                  onChange={handleChange}
                  value={message}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-custom btn-lg">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
