/*
useCallback: evita que se vuelva generar (generaría nuevo espacio en memoria) función increment cada vez que se re-renderiza el componente.

React.memo no funciona en estos casos porque se crea una nueva función.
*/

import React, { useState, useCallback, useEffect } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../styles.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    // 1er caso de uso principal para useCallback: enviando función a componente hijo
    const increment = useCallback( (num) => {

        setCounter( c => c + num ); // (*) debo pasar argumento como callback

    }, [ setCounter ] ); // no puedo colocar counter como dependencia porque cada vez que se incremente se volvería a ejecutar la función y tendría el mismo problema. (*) solución

    
    // 2do caso de uso principal del useCallback hook: función en dependecia de useEffect
   /*  useEffect( () => {
        // ???
    }, [increment] ) */


    return (
        <div>
            <h1>useCallback Hook:  { counter }  </h1>
            <hr />

            <ShowIncrement increment={ increment } />

        </div>
    )
}
