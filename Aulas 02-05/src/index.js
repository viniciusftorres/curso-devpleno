import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import MostrarVoltas from './MostrarVoltas';
import MostrarTempoMedioVolta from './MostrarTempoMedioVolta';
import Button from './Button';
import './index.css';
import './styles.css';


function App(props){

  // Os Hooks devem ser executados sempre dentro do componente. Sem querer testei fora e estava dando o seguinte erro:
  // "React Hook "useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function."
  const [numVoltas, setNumVoltas] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [running, setRunning] = useState(false);
  


  useEffect(() => { // O useEffect 
    let timer = null;
    if (running){
        timer = setInterval(() => {
          setTempo(old => old + 1);        
        },1000);
    }
    return () => {
      if (timer)
        clearInterval(timer);
    }

  },[running]); // Aqui, segundo a aula, passando o segundo parametro como um Array vazio "[]" faz com que o setInterval não seja executado mais de uma vez. 
  // Passando o parâmetro running faz com que o useEffect seja executado quando o running sofre alguma alteração.

  
  const increment = () => {
    setNumVoltas(numVoltas + 1);
  }
  
  const decrement = () => {
    if (numVoltas > 0)
      setNumVoltas(numVoltas - 1);
  }

  const toggleRunning = () => {
    setRunning(!running);
  }

  const reset = () => {
    setTempo(0);
    setNumVoltas(0);
  }
  
  return (
    <div>
      <MostrarVoltas voltas={numVoltas}/>
      <Button className="bigger" text='+' onClick={increment}></Button>
      <Button className="bigger" text='-' onClick={decrement}></Button>
      {
        numVoltas > 0 &&
        <MostrarTempoMedioVolta tempo={Math.round(tempo/numVoltas)}/>
      }
      <Button onClick={toggleRunning} text={running ? 'Pausar' : 'Iniciar'}></Button> 
      <Button onClick={reset} text='Reiniciar'></Button>      
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
