import React from "react";
import { LightState, ProjectType } from "../model";
import {
  ProjectAltBase,
  ProjectAltDetails,
  ProjectAltLI,
  ProjectAltLink,
  ProjectAltLinkButton,
  ProjectAltSkills,
  ProjectAltText,
  ProjectAltTitle,
  ProjectAltUL,
} from "./ProjectsAlt.style";
import { getLinkText, getLinkTitle } from "../../functions/helper";

interface Props {
  project: ProjectType;
  mode: LightState;
}

const ProjectsAlt: React.FC<Props> = ({ project, mode }) => {
  return (
    <ProjectAltBase mode={mode}>
      <ProjectAltTitle>{project.title}</ProjectAltTitle>
      <ProjectAltDetails>
        <ProjectAltText>{project.details}</ProjectAltText>
      </ProjectAltDetails>
      <ProjectAltSkills>
        <ProjectAltUL>
          {project.skills.map((skill, index) => (
            <ProjectAltLI key={index} mode={mode}>
              {skill}
            </ProjectAltLI>
          ))}
        </ProjectAltUL>
      </ProjectAltSkills>
      <ProjectAltLinkButton mode={mode}>
        <ProjectAltLink
          mode={mode}
          title={getLinkTitle(project.isRepo, project.isWebApp)}
          target="_blank"
          href={project.link}
        >
          {getLinkText(project.isRepo, project.isWebApp)}
        </ProjectAltLink>
      </ProjectAltLinkButton>
    </ProjectAltBase>
  );
};

export default ProjectsAlt;
