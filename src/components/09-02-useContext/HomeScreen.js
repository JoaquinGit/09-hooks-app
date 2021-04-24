import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    // Recibo user compartido en MainApp a través de mi componente UserContext
    /* busca la siguiente instancia en este árbol de componentes que sea de tipo UserContext */
    const { user } = useContext(UserContext);

    console.log( user );

    return (
        <div>
            <h1>Home</h1>
            <hr />

            <pre>
                { JSON.stringify(user, null, 4)}
            </pre>
        </div>
    )
}
