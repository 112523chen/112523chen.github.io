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
import { getLinkTitle, getLinkText } from "../../functions/helper";

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
          title={getLinkTitle(project.isRepo, project.isWebApp)}
          target="_blank"
          href={project.link}
        >
          {getLinkText(project.isRepo, project.isWebApp)}
        </ProjectLink>
      </ProjectLinkButton>
    </ProjectBase>
  );
};

export default Project;
