import React, { useReducer } from "react";
import TasksContext from "./tasksContext";
import TasksReducer from "./tasksReducer";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  PROJECT_TASKS,
  CREATE_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  TASK_STATE,
  ACTUAL_TASK,
  EDIT_TASK
} from "../../types";


const TasksState = props => {
  const initialState = {
    tasks: [
      { id: 1, name: "pick framework", state: true, projectId: 1 },
      { id: 2, name: "find partners", state: false, projectId: 2 },
      { id: 3, name: "get a loan", state: true, projectId: 3 },
      { id: 4, name: "pick framework", state: true, projectId: 1 },
      { id: 5, name: "find partners", state: false, projectId: 2 },
      { id: 6, name: "get a loan", state: true, projectId: 2 },
      { id: 7, name: "pick framework", state: true, projectId: 3 },
      { id: 8, name: "find partners", state: false, projectId: 3 },
      { id: 9, name: "get a loan", state: true, projectId: 1 }
    ],
    projecttasks: null,
    taskerror: false,
    taskstate: false,
    selectedtask: null
  };

  //crear dispatch y sstate
  const [state, dispatch] = useReducer(TasksReducer, initialState);

  // funciones

  //obtener tareas de un proyecto
  const getTasks = async project => {
    console.log(project);
    try {
      const results = await axios(
        "https://task-3ff4d.firebaseio.com/tasks.json"
      );
      const response = await Object.values(results.data).filter(function(task) {
        return task.projectId === project;
      });
      dispatch({
        type: PROJECT_TASKS,
        payload: response
      });
    } catch (error) {}
  };
  //crear tarea al proyecto
  const createTask = async task => {
    try {
      task.id = uuidv4();
      const results = await axios.post(
        "https://task-3ff4d.firebaseio.com/tasks.json",
        task
      );
      console.log(results);
      dispatch({
        type: CREATE_TASK,
        payload: Object.value(results)
      });
    } catch (error) {}
  };
  //trae taer par editar
  const actualTask = task => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task
    });
  };

  //valida y muestra un error
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    });
  };

  //eliminar tarea por id
  const deleteTask = id => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    });
  };

  //marcar tarea como terminada
  const completedTask = task => {
    dispatch({
      type: TASK_STATE,
      payload: task
    });
  };
  //EDITA MODIFICA TAREA
  const editTask = task => {
    dispatch({
      type: EDIT_TASK,
      payload: task
    });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        projecttasks: state.projecttasks,
        taskerror: state.taskerror,
        taskstate: state.taskstate,
        selectedtask: state.selectedtask,
        getTasks,
        createTask,
        validateTask,
        deleteTask,
        completedTask,
        actualTask,
        editTask
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksState;
