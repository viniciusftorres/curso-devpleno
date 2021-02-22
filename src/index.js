import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const rootElement = document.getElementById("root");

// functional component - Componente que trabalha sobre função
// no HTML chama-se uma tag com o nome do Componente (Ex: App)
// e o nome da function deve ter o mesmo nome para fazer a ligação

function App(props) {
  // O props serve para acessar os atributos passados no HTML para o JS. Ex: Vinicius é uma prop pois está no atributo name lá no HTML.

  // Este const [let, let] é uma técnica chamada Destructuring Assignment (Complementar documentação aqui)
  const [i, setI] = useState(1);

  // Exemplo de arrow function (ES6)
  const increment = () => {
    setI(i + 1);
  };

  const [palpite, setPalpite] = useState(150);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);
  const [numPalpites, setNumPalpites] = useState(1);

  const resetar = () => {
    setPalpite(150);
    setMin(0);
    setMax(300);
    setNumPalpites(1);
  };

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    alert("Você acertou o número em " + numPalpites + " tentativa(s)!");
    resetar();
  };

  return (
    <div>
      <div className="gameContent">
        <h2>Advinhe o número</h2>

        <button onClick={menor}>Menor!</button>
        <button onClick={acertou}>Acertou!</button>
        <button onClick={maior}>Maior!</button>

        <button className="btnResetar" onClick={resetar}>
          Resetar
        </button>

        <p>O número é {palpite}?</p>
        <p>Número de tentativas: {numPalpites}</p>
      </div>

      <div className="extraContent">
        <h3>Conteúdo extra</h3>
        <p>
          Olá {props.name}. Este conteúdo serve apenas para demonstrar o
          funcionamento de um contador usando o hook useState.
        </p>
        <button onClick={increment}>Incrementar o contador: </button>
        <span className="contador">{i}</span>
      </div>

      <br />
      <br />
    </div>
  );
}

ReactDOM.render(<App name="visitante" />, rootElement);
