import React, { useContext } from 'react'
import projectContext from "../../context/projects/projectContext";

const Project = ({project}) => {
   //obtener state de proyectos
   const projectsContext = useContext(projectContext);
   //deracturing states(de lado izquierdo) y funciones(lado derecho)
   const { openProject } = projectsContext;
   //state para nuevo projecto
    return ( 
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick={() => openProject(project.id)}>
            {project.name}
            </button>
        </li>
     );
}
 
export default Project;