// JSX: Sintaxe de XML dentro do JavaScript.
    // Exemplo de uso do emmet para criação de códigos HTML de forma rápida:
    // div#app>ul>li*5
    // criará:
 /*     <div id="app">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div> */

// Até este momento devo ter aprendido sobre:
// Conceitos do REACT: Componente {Header}, Propriedade, Estado e imutabilidade.
import React, { useState } from 'react';
import './App.css';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0); // useState retorna um array: [valor do estado, função para atualizar o valor do estado]

  function handleButtonClick() {
    setCounter(counter + 1); // Feito para manter o conceito de mutabilidade do REACT. Para que exista ganho em agilidade nas atualizações de valores, por exemplo.
  }

  return (
    <div>
      <Header title={`Contador: ${counter}`}/>

      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
