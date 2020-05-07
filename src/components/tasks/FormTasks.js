import React, { useContext } from 'react'
import projectContext from "../../context/projects/projectContext";

const FormTasks = () => {
    //extraer proyecto activo
   const projectsContext = useContext(projectContext);
   //deracturing states(de lado izquierdo) y funciones(lado derecho)
   const { project } = projectsContext;
    //si no hay proyecto seleccionado
  if(!project) return null;
  //array destructuring para extraer el proyecto actuak
  const [openProject] = project
    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input type ="text" className="input-text" placeholder="New Task" name="name"/>
                </div>
                <div className="contenedor-input">
                    <input 
                    type="submit"
                    className="btn btn-primario btn-submit btn-block"
                    value="Create Task"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTasks;