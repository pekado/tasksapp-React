import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import axiosClient from '../../config/axios'
import {
  PROJECT_ERROR,
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
    project: null,
    message: null
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
      const result = await axiosClient.get('/api/projects');
         dispatch({
        type: GET_PROJECTS,
        payload: result.data.projects
      });
    } catch (error) {
      const alert = {
        msg: 'Something went wrong!',
        category: 'alerta-error'
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
  };
  //agregar proyecto
  const addProject = async project => {
    try {
      const result = await axiosClient.post('/api/projects', project)
      console.log(result)
      dispatch({
        type: ADD_PROJECT,
        payload: result.data
      });
    } catch (error) {
      const alert = {
        msg: 'Something went wrong!',
        category: 'alerta-error'
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
  
  };
  //selecciona projecto con un click
  const openProject =  (projectId) => {
  
    dispatch({
      type: OPEN_PROJECT,
      payload: projectId
    });
 
  };

  //ELIMINA PORYECTO
  const deleteProject = async projectId => {
    try {
     await axiosClient.delete(`/api/projects/${projectId}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId
      });
    } catch (error) {
      const alert = {
        msg: 'Something went wrong!',
        category: 'alerta-error'
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
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
        message: state.message,
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
