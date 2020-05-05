import React, { Fragment, useState, useContext } from "react";
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {
  //obtener state del formulario
  const projectsContext = useContext(projectContext)
  const { form, showForm } = projectsContext;
    //state para nuevo projecto
    const [ project, setProject] = useState({
        name: ''
    });
    //defracturing
    const { name } = project;
    //lee contenido del input
    const onChangeProject = event => {
        setProject({
            ...project,
            [event.target.name]: event.target.value
        })
    }
    //al enviar projecto
    const submitProject = (event) => {
        event.preventDefault();
        //validar name

        //agregar al state 

        //reiniciar form
    }
    const seeForm = () => {
      showForm()
      console.log("funcion")
    }
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario" onClick={seeForm}>
        Create a new Project
      </button>
     {form
     ? (
      <form className="formulario-nuevo-proyecto" onSubmit={submitProject}>
        <input
          type="text"
          className="input-text"
          placeholder="Project Name"
          name="name"
          value={name}
          onChange={onChangeProject}
        />
        <input
          type="submit"
          className="btn btn-block btn-primario"
          value="Add New Project"
        />
      </form>
     )
     :
     null}
    </Fragment>
  );
};

export default NewProject;
