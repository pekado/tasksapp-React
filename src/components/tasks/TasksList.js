import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import projectContext from "../../context/projects/projectContext";
import TasksContext from "../../context/tasks/tasksContext";
import Task from "./Task";

const TasksList = () => {
  //obtener state de proyectos
  const projectsContext = useContext(projectContext);
  //deracturing states(de lado izquierdo) y funciones(lado derecho)
  const { project, deleteProject } = projectsContext;

  //obtener tasks del projecto
  const taskContext = useContext(TasksContext);
  const { projecttasks } = taskContext;
  if (!project) return <h2>Pick a project</h2>;
  //array destructuring para extraer el proyecto actual
  const [openProject] = project;

  return (
    <Fragment>
      <h1>Proyecto: {openProject.name}</h1>
      <ul className="listado-tareas">
        {projecttasks.length === 0 ? (
          <li className="tarea">
            <p>No tasks yet</p>
          </li>
        ) : (
          <TransitionGroup>
            {projecttasks.map(task => (
              <CSSTransition 
                key={task.id} 
                timeout={300} 
                classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => deleteProject(openProject.id)}
        >
          Delete Project
        </button>
      </ul>
    </Fragment>
  );
};

export default TasksList;
