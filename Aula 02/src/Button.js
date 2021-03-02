import React from 'react';

const Button = (props) => {
    return (
      //<button onClick={props.onClick}>{props.text}</button> // Aqui é possível pegar o evento onClick passando através das props. Naturalmente a chamada do onClick deve existir lá no elemento
      <button {...props}>{props.text}</button> // Aqui é possível pegar o evento onClick passando através das props. Naturalmente a chamada do onClick deve existir lá no elemento
    )
}

export default Button;