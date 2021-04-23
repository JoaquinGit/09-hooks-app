import { useEffect, useState, useRef } from "react"

export const useFetchRealExample = ( url ) => {

    // cuando useRef cambia su valor a false no se re-renderiza el componente
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });


    // solo se ejecuta al desmontarse el componente
    useEffect( () => {

        // la función se dispara cuando el componente se desmonte
        return () => {
            isMounted.current = false;
        }
    }, [])
  
    // si se desmonta el componente, no se actualiza el state
    useEffect(() => {
        
        setState({ data: null, loading: true, error: null });
       
        fetch( url )
            .then(resp => resp.json())
            .then(data => {

                setTimeout( () => {

                    if ( isMounted.current ) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    } else {
                        console.log('setState no se llamó')
                    }

                }, 600);

            })
    }, [url])

    return state;
}