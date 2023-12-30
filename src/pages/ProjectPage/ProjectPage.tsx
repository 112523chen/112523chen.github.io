import React, { useEffect } from "react";
import { LightState, ProjectType } from "../../components/model";
import { useParams } from "react-router-dom";
import {
  HomeLink,
  Content,
  ProjectPageBase,
  NavBar,
  ContentWrapper,
} from "./ProjectPage.style";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import remarkToc from "remark-toc";
import DisplayButton from "../../components/DisplayButton/DisplayButton";

interface Props {
  projectData: ProjectType[];
  mode: LightState;
  setMode: React.Dispatch<React.SetStateAction<LightState>>;
}

const ProjectPage: React.FC<Props> = ({ projectData, mode, setMode }) => {
  const params = useParams() as { id: string };
  const [markdownFile, setMarkdownFile] = React.useState<string>("");

  const project: ProjectType = projectData.filter(
    (project) => project.id === Number(params.id)
  )[0];

  useEffect(() => {
    import(`../../assets/markdown/projects/project_${params.id}.md`)
      .then((module) => {
        setMarkdownFile(module.default);
      })
      .catch((error) => {
        console.log(`Failed to load markdown file:\n${error}`);
      });
  });

  if (!project) {
    return (
      <ProjectPageBase mode={mode}>
        <NavBar mode={mode}>
          <HomeLink mode={mode} className="link" to="/projects">
            Go Back
          </HomeLink>
          <DisplayButton mode={mode} setMode={setMode} useInMainPage={false} />
        </NavBar>
        <div style={{ textAlign: "center" }}>
          <h1>404: Page Not Found</h1>
        </div>
      </ProjectPageBase>
    );
  }

  return (
    <ProjectPageBase mode={mode}>
      <NavBar mode={mode}>
        <HomeLink mode={mode} className="link" to="/projects">
          Go Back
        </HomeLink>
        <DisplayButton mode={mode} setMode={setMode} useInMainPage={false} />
      </NavBar>
      <ContentWrapper mode={mode}>
        <Content>
          <Markdown
            remarkPlugins={[remarkGfm, remarkToc]}
            rehypePlugins={[rehypeHighlight]}
          >
            {markdownFile}
          </Markdown>
        </Content>
      </ContentWrapper>
    </ProjectPageBase>
  );
};

export default ProjectPage;
