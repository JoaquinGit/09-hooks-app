import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css';

export const CounterWithCustomHook = () => {

    //  no importa el orden en desestructuracion de objetos
    const { state, increment, decrement, reset } = useCounter( 100 );

    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr />

            <button 
                className="btn btn-primary"
                // si no coloco "() =>" da un loop infinito
                onClick={ () => increment(2) }
            > + 1 
            </button>

            <button 
                className="btn btn-primary"
                onClick={ reset }
            > Reset
            </button>

            <button 
                className="btn btn-primary"
                onClick={ () => decrement(2) }
            > - 1 
            </button>
        </>
    )
}
