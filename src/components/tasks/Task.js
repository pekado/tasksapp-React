import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import TasksContext from "../../context/tasks/tasksContext";

const Task = ({ task }) => {
  //extraer proyecto activo
  const projectsContext = useContext(projectContext);
  //deracturing states(de lado izquierdo) y funciones(lado derecho)
  const { project } = projectsContext;
  //obtener funcion del context de tasks
  const taskContext = useContext(TasksContext);
  const { deleteTask, getTasks, completedTask, actualTask } = taskContext;
  //destructuring
  const [actualProject] = project;
  //funcion para eliminar tarea
  const selectedTask = id => {
    deleteTask(id); //id de la tarea
    getTasks(actualProject.id); //id del proyecto
  };

  //cambiar estado de tarea
  const changeState = task => {
    if (task.state) {
      task.state = false;
    } else {
      task.state = true;
    }
    completedTask(task)
  };
  //agrega tarea actual cuando el usuario quiere editarla
  const editTask = (task) => {
    actualTask(task)
  }
  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.state ? (
          <button
            type="button"
            className="completo"
            onClick={() => changeState(task)}
          >
            Done
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => changeState(task)}
          >
            Pending
          </button>
        )}
      </div>
      <div className="acciones">
        <button onClick={() => editTask(task)} type="button" className="btn btn-primario">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => selectedTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
