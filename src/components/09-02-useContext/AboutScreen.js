import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    const handleClick = () => {
        setUser({});
    }

    return (
        <div>
            <h1>About</h1>
            <hr />

            <pre>
                { JSON.stringify(user, null, 3)}
            </pre>

            {/* limpio user y se actualiza en todas las páginas */}
            <button 
            className="btn btn-warning"
            onClick= { handleClick }>
                Logout
            </button>
        </div>
    )
}
