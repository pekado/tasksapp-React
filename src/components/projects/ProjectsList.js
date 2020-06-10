import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AlertContext from "../../context/alerts/AlertContext";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";
import AlertState from "../../context/alerts/AlertState";
import AuthContext from "../../context/auth/authContext";

const ProjectsList = () => {
  //obtener state
  const projectsContext = useContext(projectContext);
  const { message, projects, getProjects } = projectsContext;
  const authContext = useContext(AuthContext);
  const { userAuth, user, logOut } = authContext;

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  useEffect(() => {
    userAuth();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (message) {
      showAlert(message.msg, message.category);
    }
    getProjects();
    //eslint-disable-next-line
  }, [message]);
  //revisar si hay projects
  if (projects.length === 0) return <p>No projects yet</p>;
  return (
    <div>
      <ul className="listado-proyectos">
        <TransitionGroup>
          {projects.map(project => (
            <CSSTransition key={project._id} timeout={300} classNames="tarea">
              <Project project={project} />
            </CSSTransition>
          ))}
        </TransitionGroup>
        {alert ? (
          <div className={`alerta ${alert.category}`}>{alert.msg}</div>
        ) : null}
      </ul>
      <button className="btn btn-block btn-primario" onClick={() => logOut()}>
        Log Out
      </button>
    </div>
  );
};

export default ProjectsList;
