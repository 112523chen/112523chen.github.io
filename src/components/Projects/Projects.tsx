import React from "react";
import { LightState, ProjectType } from "../model";
import Project from "../Project/Project";
import Heading from "../Heading/Heading";
import { ProjectsBase, Frame } from "./Projects.style";

interface Props {
  projectData: ProjectType[];
  mode: LightState;
  className?: string;
}

const Projects: React.FC<Props> = ({ projectData, mode, className }) => {
  return (
    <ProjectsBase>
      <Heading>Projects</Heading>
      <Frame>
        {projectData.map((project) => (
          <Project project={project} key={project.id} mode={mode} />
        ))}
      </Frame>
    </ProjectsBase>
  );
};

export default Projects;
