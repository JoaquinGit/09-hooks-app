import { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [state, setState] = useState(initialState);

    const handleInputChange = ( {target}) => {

        setState({
            ...state,

            // sobreescribe el estado anterior donde se modifique
            [target.name]: target.value,
        })
    }

    return [
        state,
        handleInputChange
    ];
}
