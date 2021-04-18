import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {   // Solución: no se re-renderiza

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
