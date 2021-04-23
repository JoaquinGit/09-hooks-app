/*
useLayoutEffect es igual a useEffect, PERO se dispara DESPUES de todas las mutaciones del DOM.

*/

import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounterForMultiple } from '../../hooks/useCounter2';

import './layout.css';

export const Layout = () => {

    const { state:counter, increment } =  useCounterForMultiple(1);
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    
    const { quote } = !!data && data[0];

    // mantiene la referencia al párrafo del blockquote
    const pTag = useRef();

    // guarda las medidas del elemento
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect( () =>  {

        // obtiene medidas del elemento
        setBoxSize( pTag.current.getBoundingClientRect() );

    },[quote])


    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ pTag }
                > 
                    { quote } 
                </p>
            </blockquote>


            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>


            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente quote
            </button>

        </div>
    )
}
