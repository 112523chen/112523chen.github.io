import React from "react";
import { LightState, ProjectType } from "../model";
import styled from "styled-components";
import Project from "../Project/Project";
import Heading from "../Heading/Heading";

interface Props {
  projectData: ProjectType[];
  mode: LightState;
  className?: string;
}

const ProjectsBase = styled.div`
  min-width: 21rem;
  padding: 0 20%;
  -webkit-margin-after: 15rem;
  margin-block-end: 15rem;
  @media only screen and (max-width: 24rem) {
    padding: 0 min(5rem, 1rem);
    margin-block-start: 10rem;
    margin-block-end: 3rem;
  }
`;

const Frame = styled.div``;

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
