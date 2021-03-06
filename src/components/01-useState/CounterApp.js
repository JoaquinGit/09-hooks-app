import React, { useState } from 'react';

import '../styles.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    const { counter1, counter2} = state;

    return (
        <>
            <h1>Counter1: { counter1 } </h1>
            <h1>Counter2: { counter2 } </h1>
            
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => { 

                    // setState da un estado totalmente nuevo y le cae encima al anterior
                    setState({
                        ...state,
                        // estoy sobreescribiendo valor de counter1 en "...state"
                        counter1: counter1 + 1
                    });
                }}
            >
                +1
            </button>
        </>
    )
}
