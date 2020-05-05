import React, { Fragment } from "react";
import Task from "./Task";

const TasksList = () => {
  const tasks = [
    { name: "pick framework", state: true },
    { name: "find partners", state: false },
    { name: "get a loan", state: true }
  ];
  return (
    <Fragment>
      <h1>Proyecto: coso</h1>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No tasks yet</p>
          </li>
        ) : (
          tasks.map(task => <Task task={task} />)
        )}
        <button type="button" className="btn btn-primario">
          Delete Project
        </button>
      </ul>
    </Fragment>
  );
};

export default TasksList;
