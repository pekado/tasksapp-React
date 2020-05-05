import React, { useReducer } from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT, GET_PROJECTS } from "../../types";

const ProjectState = props => {
  const projects = [
    { id: 1, name: "tiendo" },
    { id: 2, name: "coso" },
    { id: 3, name: "otro coso" }
  ];
  const initialState = {
    projects: [],
    newProjectForm: false
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
  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        showForm,
        getProjects
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
