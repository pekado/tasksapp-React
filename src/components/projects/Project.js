import React, { useContext } from 'react'
import projectContext from "../../context/projects/projectContext";
import TasksContext from "../../context/tasks/tasksContext";

const Project = ({project}) => {
   //obtener state de proyectos
   const projectsContext = useContext(projectContext);
   //deracturing states(de lado izquierdo) y funciones(lado derecho)
   const { openProject } = projectsContext;
   //obtener funcion del context de tasks
   const taskContext  = useContext(TasksContext)
   const { getTasks } = taskContext;


   //funciona para agregar proyecto actual
   const selectProject = id => {
        openProject(id)//fijar proyecto actual
        getTasks(id); //filtrar tareas al hacer click
   }

    return ( 
        <li>
            <button
            type="button"
            className="btn btn-blank project"
            onClick={() => selectProject(project._id)}>
            {project.name}
            </button>
        </li>
     );
}
 
export default Project;