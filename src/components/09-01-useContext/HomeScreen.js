import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    // Recibo user compartido en MainApp a través de mi componente UserContext
    /* busca la siguiente instancia en este árbol de componentes que sea de tipo UserContext */
    const userContext = useContext(UserContext);

    console.log(userContext);

    return (
        <div>
            <h1>Home</h1>
            <hr />
        </div>
    )
}
