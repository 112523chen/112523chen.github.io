import React from "react";
import { ProjectType } from "../model";

interface Props {
  project: ProjectType;
  mode: string;
}

const Project: React.FC<Props> = ({ project, mode }) => {
  return (
    <>
      <div className="project" id="ML-Galaxy-Project">
        <div className="project_title">
          <h3>{project.title}</h3>
        </div>
        <div className="project_details">
          <p>{project.details}</p>
        </div>
        <div className="project_skills">
          <ul>
            {project.skills.map((skill, index) => (
              <li
                className={
                  mode === "light" ? "project_skill" : "project_skill dark-mode"
                }
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={
            mode === "light"
              ? "website project_link"
              : "website project_link dark-mode"
          }
        >
          <a
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
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
