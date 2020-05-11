import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import axios from "axios";
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  FORM_VALIDATION,
  OPEN_PROJECT,
  DELETE_PROJECT
} from "../../types";

const ProjectState = props => {

  const initialState = {
    projects: [],
    newProjectForm: false,
    formError: false,
    project: null
  };
  //dispatch para ejecutar acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);
  //serie de funciones para el crud
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT
    });
  };
  //obtener projects
  const getProjects = async () => {
    try {
      const results = await axios(
        "https://task-3ff4d.firebaseio.com/projects.json"
      );
         dispatch({
        type: GET_PROJECTS,
        payload: Object.values(results.data)
      });
    } catch (error) {
      console.log("Network Error");
    }
  };
  //agregar proyecto
  const addProject = async project => {
    try {
      project.id = uuidv4();
      const resultado = await axios.post(
        "https://task-3ff4d.firebaseio.com/projects.json",
        project
      );
      console.log(resultado);
      dispatch({
        type: ADD_PROJECT,
        payload: project
      });
    } catch (error) {
      console.log(error);
    }
    // project.id = uuidv4();
    //insertar el proyecto en el state
  };
  //selecciona projecto con un click
  const openProject = projectId => {
    dispatch({
      type: OPEN_PROJECT,
      payload: projectId
    });
  };

  //ELIMINA PORYECTO
  const deleteProject = async projectId => {
    try {
      const resultado = await axios.delete(
        "https://task-3ff4d.firebaseio.com/projects.json",
        projectId
      );
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId
      });
    } catch (error) {}
  };

  //validar form por errores
  const showError = () => {
    dispatch({
      type: FORM_VALIDATION
    });
  };
  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        formError: state.formError,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        openProject,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
