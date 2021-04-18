/*
**** React.memo ****
Solución: el componente no se re-renderiza si sus properties siguen siendo son las mismas.
NO FUNCIONA PARA PASO DE FUNCIONES COMO PROPIEDADES.


Caso de uso:
El componente <Small /> no se debería volver a llamar cuando presiono botón Show/Hide.

*/

import React, { useState } from 'react';
import { useCounterForMultiple } from '../../hooks/useCounterForMultiple';
import { Small } from './Small';

import '../styles.css';


export const Memorize = () => {

    const { state:counter, increment } =  useCounterForMultiple( 10 );
    const [ show, setShow ] = useState(true);

    return (
        <div>
            <h1>Counter: <Small value={ counter } />  </h1>
            <hr />


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
