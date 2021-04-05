import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });
  
    useEffect(() => {

        //para que muestre loading en cada refresco de frase
        setState({ data: null, loading: true, error: null });
       
        fetch( url )
            .then(resp => resp.json())
            .then(data => {

                setState({
                    loading: false,
                    error: null,
                    data
                })
            })
    }, [url])

    return state;
}
