import React from 'react'

// Paso función como argumento. React.memo POR SI SOLO no surte efecto, ya que recibe una nueva función ( esta se vuelve a crear con su respectivo espacio en memoria) en cada renderizado.
//React.memo memoriza el componente si el argumento no cambia
export const ShowIncrement = React.memo(({ increment }) => {

    console.log(' Me volví a generar :( ');

    return (
        <button
            className="btn btn-primary"
            onClick={ () => {
                increment( 5 );
            }}
        >
            Incrementar
        </button>
    )
})
