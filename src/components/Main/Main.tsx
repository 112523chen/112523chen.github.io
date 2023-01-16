import React from "react";
import Display from "../Display/Display";
import About from "../About/About";
import Coursework from "../Coursework/Coursework";
import Skillset from "../Skillset/Skillset";
import Projects from "../Projects/Projects";
import { ProjectType } from "../model";

interface Props {
  projectData: ProjectType[];
  mode: string;
}

const Main: React.FC<Props> = ({ projectData, mode }) => {
  return (
    <>
      <Display mode={mode} />
      <About mode={mode} />
      <Coursework mode={mode} />
      <Skillset mode={mode} />
      <Projects projectData={projectData} mode={mode} />
    </>
  );
};

export default Main;
