import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

const ProjectsList = () => {
  //obtener state
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(() => {
    getProjects();
  }, []);
  //revisar si hay projects
  if (projects.length === 0) return <p>No projects yet</p>;
  return (
    <ul className="listado-proyectos">
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
