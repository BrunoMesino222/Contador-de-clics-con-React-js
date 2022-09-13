import React from "react";
import '../hojas-de-estilo/Button.css';

function Button({text, buttonClicTrue, clicControl}){
    return(
        <button
        className={buttonClicTrue ? "clicButton" : "restartButton"}
        onClick={clicControl}>
            {text}
        </button>
    )
}

export default Button; 