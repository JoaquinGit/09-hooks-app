import React, { useRef } from 'react';

import '../styles.css';

export const FocusScreen = () => {

    // useRef permite cambiar hacia dónde apunta la variable, SIN DISPARAR UNA RENDERIZACION
    // useRef almacena valores dentro de propiedad current
    const inputRef = useRef();
    // console.log(ref);

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            
            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
             
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>
           
        </div>
    )
}
