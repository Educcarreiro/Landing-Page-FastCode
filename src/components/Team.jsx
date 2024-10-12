import React from "react";

export const Team = (props) => {
  return (
    <div id="team">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/team/dudateste.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="team-text">
              <h2>Desenvolvedor</h2>
              <p>
                {/* Texto da biografia */}
                Tenho experiência sólida em inteligência artificial e ciência de dados, 
                com foco em modelos de linguagem de larga escala (LLMs), como o LLaMA, 
                atuando em finetuning e otimização de performance. Também domino o 
                pré-processamento de texto, sumarização e engenharia de prompts para 
                melhorar a qualidade dos resultados. No desenvolvimento web, sou 
                especializada em Next.js, React e Angular, criando interfaces modernas 
                e responsivas, com foco em performance e escalabilidade, entregando uma 
                experiência de usuário eficiente.
              </p>
              {/* Subtítulo realocado */}
              <h3>Maria Eduarda Pinheiro Carreiro</h3>
              <p>Desenvolvedor Full-Stack | Data Scientist Trainee </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
