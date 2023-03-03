import React from "react";
import { LightState, ProjectType } from "../model";
import {
  ProjectBase,
  ProjectTitle,
  ProjectH3,
  ProjectDetails,
  Projectp,
  ProjectSkills,
  ProjectUL,
  ProjectLI,
  ProjectLinkButton,
  ProjectLink,
} from "./Project.style";

interface Props {
  project: ProjectType;
  mode: LightState;
}

const Project: React.FC<Props> = ({ project, mode }) => {
  return (
    <ProjectBase>
      <ProjectTitle>
        <ProjectH3>{project.title}</ProjectH3>
      </ProjectTitle>
      <ProjectDetails>
        <Projectp>{project.details}</Projectp>
      </ProjectDetails>
      <ProjectSkills>
        <ProjectUL>
          {project.skills.map((skill, index) => (
            <ProjectLI mode={mode} key={index}>
              {skill}
            </ProjectLI>
          ))}
        </ProjectUL>
      </ProjectSkills>
      <ProjectLinkButton mode={mode}>
        <ProjectLink
          mode={mode}
          title={
            project.isRepo === false && project.isWebApp === true
              ? "Project Web App"
              : project.isRepo === false && project.isWebApp === false
              ? "Project Web Page"
              : "Project Github Repo"
          }
          target="_blank"
          href={project.link}
        >
          {project.isRepo === false && project.isWebApp === true
            ? "Web App"
            : project.isRepo === false && project.isWebApp === false
            ? "Web Page"
            : "Github Repo"}
        </ProjectLink>
      </ProjectLinkButton>
    </ProjectBase>
  );
};

export default Project;
