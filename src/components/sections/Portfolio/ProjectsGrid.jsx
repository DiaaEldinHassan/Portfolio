
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projects.js"; 

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};


export default ProjectsGrid;