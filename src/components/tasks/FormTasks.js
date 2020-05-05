import React from 'react'

const FormTasks = () => {
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