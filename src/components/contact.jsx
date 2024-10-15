import React, { useEffect } from "react";

export const Contact = () => {

  useEffect(() => {
    const scrollToContact = () => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (window.location.hash === "#contact") {
      scrollToContact();
    }
  }, []);

  return (
    <div id="contact" className="text-center" style={{ backgroundColor: "#6a1b9a", color: "white", padding: "50px 0" }}>
      <div className="container">
        {/* Título centralizado */}
        <div className="section-title">
          <h2>Fale Conosco</h2>
          <div className="underline"></div> {/* Barrinha abaixo do título */}
          <p>
            Entre em contato conosco pelos seguintes canais. Estamos disponíveis
            para ajudá-lo da melhor forma possível.
          </p>
        </div>

        {/* Blocos de Contato - Centralizados */}
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="contact-item">
              <i className="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
              <h3>E-mail</h3>
              <p>
                <a href="mailto:fastcodebr@gmail.com" className="contact-link">fastcodebr@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="contact-item">
              <i className="fab fa-instagram fa-3x" aria-hidden="true"></i>
              <h3>Instagram</h3>
              <p>
                <a href="https://www.instagram.com/fastcodebr" target="_blank" rel="noopener noreferrer" className="contact-link">
                  @fastcodebr
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="contact-item">
              <i className="fab fa-whatsapp fa-3x" aria-hidden="true"></i>
              <h3>WhatsApp</h3>
              <p>
                <a href="https://wa.me/5581999999999" target="_blank" rel="noopener noreferrer" className="contact-link">
                  (81) 99999-9999
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="contact-item">
              <i className="fab fa-linkedin fa-3x" aria-hidden="true"></i>
              <h3>LinkedIn</h3>
              <p>
                <a href="https://www.linkedin.com/in/eduarda-carreiro-pinheiro/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  Eduarda Carreiro
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/bruno-cazé-53b050248/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  Bruno Cazé
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" style={{ backgroundColor: "#f4f4f4", padding: "20px 0", marginTop: "50px" }}>
        <div className="container text-center">
          <p>&copy; 2024 FastCode Design</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
