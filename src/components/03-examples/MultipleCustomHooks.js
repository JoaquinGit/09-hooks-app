import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounterForMultiple } from '../../hooks/useCounterForMultiple';

import '../styles.css';

export const MultipleCustomHooks = () => {

    const { state, increment } = useCounterForMultiple();

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ state }`);


    // si data no es null, desestructura data[0]. Transformo null(data) en falso: !null = true --> !!null = false
    const {author, quote} = !!data && data[0];



    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :   
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0"> {quote} </p>
                            <footer className="blockquote-footer"> {author} </footer>
                        </blockquote>
                        
                    )
            }

            <button className="btn btn-primary" onClick={ increment }>
                Siguiente quote
            </button>

        </div>
    )
}
