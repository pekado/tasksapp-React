import React from "react";
import NewProject from "../projects/NewProject";
import ProyectsList from "../projects/ProjectsList";
import Nav from "../layout/Nav";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        Task<span>Manager</span>
      </h1>
      <Nav />
      <NewProject />
      <div className="proyectos">
        <h2>Your Projects</h2>
        <ProyectsList />
      </div>
    </aside>
  );
};

export default Sidebar;
