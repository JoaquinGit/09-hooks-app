import React from 'react';
import { useFetchRealExample } from './useFetchRealExample';
import { useCounterForMultiple } from '../03-examples/useCounterForMultiple';

import '../02-useEffect/effects.css'

export const MultipleCustomHooksRealExample = () => {

    const { state, increment } = useCounterForMultiple();

    const { loading, data } = useFetchRealExample(`https://www.breakingbadapi.com/api/quotes/${ state }`);


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