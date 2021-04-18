/*
**** useMemo ***
Solución: useMemo memoriza el valor renderizado si el argumento no cambia, por ello no ejecuta procesoPesado si su argumento counter no cambia.

Caso de uso: el procesoPesado no debería ejecutarse al presionar el botón Show/Hide.

*/

import React, { useState, useMemo } from 'react';
import { useCounterForMultiple } from '../../hooks/useCounterForMultiple';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../styles.css';


export const MemoHook = () => {

    const { state:counter, increment } =  useCounterForMultiple( 1000 );
    const [ show, setShow ] = useState(true);
    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small>  </h3>
            <hr />

            <p> { memoProcesoPesado } </p>

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}
