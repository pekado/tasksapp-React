import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import FormTasks from "../tasks/FormTasks";
import TasksList from "../tasks/TasksList";
import AuthContext from "../../context/auth/authContext";

const Projects = () => {
  //extraer info de auth
  const authContext = useContext(AuthContext);
  const { userAuth } = authContext;

  useEffect(() => {
    userAuth();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <main>
          <FormTasks />
          <div className="contenedor-tareas">
            <TasksList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
