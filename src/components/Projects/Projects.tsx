import React from "react";
import { ProjectType } from "../model";
import Project from "../Project/Project";

interface Props {
  projectData: ProjectType[];
  mode: string;
}

const Projects: React.FC<Props> = ({ projectData, mode }) => {
  return (
    <>
      <div id="projects">
        <div className="headings">
          <h2>Projects</h2>
          <hr />
        </div>
        <div id="frame">
          {projectData.map((project) => (
            <Project project={project} key={project.id} mode={mode} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
