import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

    const user = {
        id: 1234,
        name: 'Joaquin',
        lastname: 'Smith'
    }

    return (

        /* Context.Provider sirve para proveer información a lo largo de todos sus componentes hijos mediante la prop value */
        <UserContext.Provider value={ user }>

            <AppRouter />

        </UserContext.Provider>
        
    )
}
