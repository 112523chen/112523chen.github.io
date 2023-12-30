import React, { useEffect } from "react";
import { LightState, ProjectType, TopicType } from "../../components/model";
import ProjectAlt from "../../components/ProjectsAlt/ProjectsAlt";
import {
  FilterLink,
  FrameAlt,
  HomeLink,
  ProjectPageBase,
  Title,
  TopicFrame,
  NavBar,
} from "./ProjectPage.style";
import DisplayButton from "../../components/DisplayButton/DisplayButton";
import { useLocation, useParams } from "react-router-dom";
import { getFilterLabel } from "../../functions/helper";

interface Props {
  projectData: ProjectType[];
  mode: LightState;
  setMode: React.Dispatch<React.SetStateAction<LightState>>;
}

const ProjectPage: React.FC<Props> = ({ projectData, mode, setMode }) => {
  const [projects, setProjects] = React.useState<ProjectType[]>(projectData);

  const allowedTopics = [
    "software_engineering",
    "web_development",
    "machine_learning",
    "data_science",
    "data_engineering",
  ];

  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    if (params.hasOwnProperty("type")) {
      setProjects(
        projectData.filter((project) =>
          project.topics.includes(params.type as string)
        )
      );
    } else {
      setProjects(projectData);
    }

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ProjectPageBase mode={mode}>
      <NavBar mode={mode}>
        <HomeLink mode={mode} className="link" to="/">
          Go Back
        </HomeLink>
        <DisplayButton mode={mode} setMode={setMode} useInMainPage={true} />
      </NavBar>
      <Title id="title">Project Page</Title>
      <TopicFrame>
        {Object.values(TopicType)
          .filter((v) => isNaN(Number(v)))
          .map((topic) => (
            <FilterLink
              mode={mode}
              key={topic}
              to={`/projects/${topic !== "all" ? topic : ""}`}
            >
              {getFilterLabel(topic as string)}
            </FilterLink>
          ))}
      </TopicFrame>
      <FrameAlt>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectAlt project={project} key={project.id} mode={mode} />
          ))
        ) : (
          <h1>No projects found</h1>
        )}
      </FrameAlt>
    </ProjectPageBase>
  );
};

export default ProjectPage;
