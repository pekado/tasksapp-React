import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  FORM_VALIDATION,
  OPEN_PROJECT,
  DELETE_PROJECT
} from "../../types";

const ProjectState = props => {
  const projects = [
    { id: 1, name: "tiendo" },
    { id: 2, name: "coso" },
    { id: 3, name: "otro coso" }
  ];
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
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    });
  };
  //agregar proyecto
  const addProject = project => {
    project.id = uuidv4();
    //insertar el proyecto en el state
    dispatch({
      type: ADD_PROJECT,
      payload: project
    });
  };
  //selecciona projecto con un click
  const openProject = projectId => {
    dispatch({
      type: OPEN_PROJECT,
      payload: projectId
    });
  };

  //ELIMINA PORYECTO
  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    })
  }

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
