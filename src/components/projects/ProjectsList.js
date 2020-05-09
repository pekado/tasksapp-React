import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

const ProjectsList = () => {
  //obtener state
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(() => {
    getProjects();
    //eslint-disable-next-line
  }, []);
  //revisar si hay projects
  if (projects.length === 0) return <p>No projects yet</p>;
  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map(project => (
          <CSSTransition key={project.id} timeout={300} classNames="tarea">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectsList;
