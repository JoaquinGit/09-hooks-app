import { useState } from "react";

// !!!!! si no le mandan nada, el initialState es = a 10
export const useCounterForMultiple = (initialState = 1) => {

    const [state, setState] = useState(initialState);

    const increment = () => {
        setState( state + 1 );
    }

    const decrement = () => {
        setState( state - 1 );
    }

    const reset = () => {
        setState( initialState );
    }

    return {
        state,
        increment,
        decrement,
        reset
    };

}

