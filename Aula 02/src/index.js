import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App(props){

  // Os Hooks devem ser executados sempre dentro do componente. Sem querer testei fora e estava dando o seguinte erro:
  // "React Hook "useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function."
  const [numVoltas, setNumVoltas] = useState(14);
  const [tempo, setTempo] = useState(0);

  const Button = (props) => {
    return (
      <button onClick={props.onClick}>{props.text}</button> // Aqui é possível pegar o evento onClick passando através das props. Naturalmente a chamada do onClick deve existir lá no elemento
    )
  }
  
  const MostrarVoltas = (props) => {
    return <p> {props.voltas} <br/> Voltas</p>
  }
  
  const MostrarTempoMedioVolta = (props) => {
    return <p> {props.tempo} <br/> Tempo médio por volta</p>
  }
  
  const increment = () => {
    setNumVoltas(numVoltas + 1);
  }
  
  const decrement = () => {
    setNumVoltas(numVoltas - 1);
  }
  
  useEffect(() => { // O useEffect 
    setInterval(() => {
      console.log("chamou!");
    },1000)
  },[]);  // Aqui, segundo a aula, passando o segundo parametro como um Array vazio "[]" faz com que o setInterval não seja executado mais de uma vez. 
          // Mas não ficou claro o que é exatamente este parâmetro

  
  return (
    <div>
      <MostrarVoltas voltas={numVoltas}/>
      <Button text='+' onClick={increment}></Button>
      <Button text='-' onClick={decrement}></Button>
      <MostrarTempoMedioVolta tempo={tempo}/>
      <Button text='Iniciar'></Button>
      <Button text='Reiniciar'></Button>
    </div>
  )
}







ReactDOM.render(
  <App/>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
