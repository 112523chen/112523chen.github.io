import React from "react";
import { LightState, ProjectType } from "../model";
import Project from "../Project/Project";
import Heading from "../Heading/Heading";
import { ProjectsBase, Frame } from "./Projects.style";
import ProjectCatalogButton from "../ProjectCatalogButton/ProjectCatalogButton";
import { ProjectH3 } from "../Project/Project.style";

interface Props {
  projectData: ProjectType[];
  mode: LightState;
  className?: string;
}

const Projects: React.FC<Props> = ({ projectData, mode, className }) => {
  return (
    <ProjectsBase id="projects" className="section">
      <Heading>Projects</Heading>
      <Frame>
        {projectData.slice(0, 3).map((project) => (
          <Project project={project} key={project.id} mode={mode} />
        ))}
      </Frame>
      <ProjectH3>Click To See More Project</ProjectH3>
      <ProjectCatalogButton mode={mode} />
    </ProjectsBase>
  );
};

export default Projects;
