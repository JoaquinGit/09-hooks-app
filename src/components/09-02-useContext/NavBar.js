/* Link evita que se refresque completamente la página haciendo peticiones innecesarias al servidor. (SPA)

NavLink (diferencia con Link): me permite saber cual es la ruta en la cual me encuentro y activar una clase de CSS
*/

import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <NavLink className="navbar-brand" to="/">useContext</NavLink>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                    {/* agrego exact para que no se muestre siempre activo el Home */}
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">Login</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>

                </div>
            </div>
        </nav>
    )
}
