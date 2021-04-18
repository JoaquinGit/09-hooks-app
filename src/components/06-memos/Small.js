import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log(' Me volví a llamar :( ');
    // Si hubiese una llamada http, sin el uso de .memo se volvería a realizar, consumiendo plan de datos del usuario y cargando la aplicación de manera innecesaria.

    return (
        <small> { value } </small>
    )
});

