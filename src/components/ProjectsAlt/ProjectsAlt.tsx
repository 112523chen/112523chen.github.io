import React from "react";
import { LightState, ProjectType } from "../model";
import {
  ProjectAltBase,
  ProjectAltDetails,
  ProjectAltLI,
  ProjectAltSkills,
  ProjectAltText,
  ProjectAltTitle,
  ProjectAltUL,
} from "./ProjectsAlt.style";

interface Props {
  project: ProjectType;
  mode: LightState;
}

const ProjectsAlt: React.FC<Props> = ({ project, mode }) => {
  return (
    <ProjectAltBase mode={mode} to={project.link} target="_blank">
      <ProjectAltTitle>{project.title}</ProjectAltTitle>
      <ProjectAltDetails>
        <ProjectAltText>
          {project.details.length > 200
            ? project.details.substring(0, 200) + "..."
            : project.details}
        </ProjectAltText>
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
    </ProjectAltBase>
  );
};

export default ProjectsAlt;
