import React from 'react';

 
const MostrarVoltas = (props) => {
    return (
        <p className="voltas">
            <span className="voltas"> {props.voltas}</span> <br/>
            Voltas
        </p>
    )
}

export default MostrarVoltas