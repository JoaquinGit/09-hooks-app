import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

/*     const user = {
        id: 1234,
        name: 'John',
        lastname: 'Smith'
    } */

    const [user, setUser] = useState({
        id: 1234,
        name: 'Johnn',
        lastname: 'Smith'
    })

    return (

        /* Context.Provider sirve para proveer información a lo largo de todos sus componentes hijos mediante la prop value */
        <UserContext.Provider value={{
            user,
            setUser
        }}>

            <AppRouter />

        </UserContext.Provider>
        
    )
}
