import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica os dados capturados no formulário
    console.log("Form Data:", { name, email, message });

    // Substitua pelos seus dados corretos do EmailJS
    emailjs
      .sendForm(
        "service_lgtzhr8",  // Verifique se o ID do serviço está correto
        "template_upje3db", // Verifique o ID do template
        e.target,           // Envia os dados do formulário
        "1NW0UJr59dm84Qm05" // Verifique se o seu ID de usuário do EmailJS está correto
      )
      .then(
        (result) => {
          console.log("Email enviado com sucesso:", result.text);
          clearState();
        },
        (error) => {
          console.log("Erro ao enviar email:", error.text);
        }
      );
  };

  return (
    <div>
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
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nome"
                        required
                        onChange={handleChange}
                        value={name} // Vincula o valor ao estado
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email} // Vincula o valor ao estado
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensagem"
                    required
                    onChange={handleChange}
                    value={message} // Vincula o valor ao estado
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informação de contato</h3>
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
              <p>
                <span>
                  <i className="fab fa-instagram"></i> Instagram
                </span>{" "}
                <a href="https://www.instagram.com/fastcodebr?igsh=OHdmMGxyejM3eGp0" target="_blank" rel="noopener noreferrer">
                  @fastcodebr
                </a>
              </p>
              <p>
                <span>
                  <i className="fab fa-linkedin"></i> LinkedIn
                </span>{" "}
                <a href="https://www.linkedin.com/in/eduarda-carreiro-pinheiro/" target="_blank" rel="noopener noreferrer">
                  Eduarda Carreiro
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2024 FastCode Design</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
