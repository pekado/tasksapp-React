import React, { Fragment, useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import Task from "./Task";

const TasksList = () => {
  //obtener state de proyectos
  const projectsContext = useContext(projectContext);
  //deracturing states(de lado izquierdo) y funciones(lado derecho)
  const { project, deleteProject } = projectsContext;
  //si no hay proyecto seleccionado
  if(!project) return <h2>Pick a project</h2>
  //array destructuring para extraer el proyecto actuak
  const [openProject] = project

  const tasks = [
    { name: "pick framework", state: true },
    { name: "find partners", state: false },
    { name: "get a loan", state: true }
  ];
  return (
    <Fragment>
      <h1>Proyecto: {openProject.name}</h1>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No tasks yet</p>
          </li>
        ) : (
          tasks.map(task => <Task task={task} />)
        )}
        <button type="button" className="btn btn-primario" onClick={() => deleteProject(openProject.id)}>
          Delete Project
        </button>
      </ul>
    </Fragment>
  );
};

export default TasksList;
