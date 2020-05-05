import React from 'react'
import NewProject from '../projects/NewProject'
import ProyectsList from '../projects/ProjectsList'

const Sidebar = () => {
    return ( 
        <aside>
            <h1>Mern<span>tasks</span></h1>
            <NewProject/>
            <div className="proyectos">
                <h2>Tus proyectos</h2>
                <ProyectsList/>
            </div>
        </aside>
     );
}
 
export default Sidebar;