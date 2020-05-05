import React from 'react'

const Nav = () => {
    return ( 
    <header className="app-header">
        <p className="nombre-usuario">Hola <span>Benja</span></p>
        <nav className="nav-principal">
            <a href="#!">Log out</a>
        </nav>
    </header> 
    );
}
 
export default Nav;