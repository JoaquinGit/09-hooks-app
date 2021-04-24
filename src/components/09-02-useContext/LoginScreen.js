import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    const user2 = {
        id: 2,
        name: 'Fernando',
        lastname: 'Herrera'
    }

    return (
        <div>
            <h1>Login</h1>
            <hr />

            {/* seteo user del componente "Login" y se actualiza también en el Home*/}
            <button 
            className="btn btn-primary" 
            onClick={() => setUser(user2)}
            >
                Login
            </button>
        </div>
    )
}
