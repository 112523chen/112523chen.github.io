import React from "react";
import Display from "../Display/Display";
import About from "../About/About";
import Coursework from "../Coursework/Coursework";
import Skillset from "../Skillset/Skillset";
import Projects from "../Projects/Projects";
import { LightState, ProjectType } from "../model";
import Professional from "../Professional/Professional";
import WIDNSection from "../WIDNSection/WIDNSection";
import Navigation from "../Navigation/Navigation";

interface Props {
  projectData: ProjectType[];
  mode: LightState;
  isMobileDevice: boolean;
}

const Main: React.FC<Props> = ({ projectData, mode, isMobileDevice }) => {
  return (
    <>
      <Display mode={mode} isMobileDevice={isMobileDevice} />
      {isMobileDevice ? <></> : <Navigation mode={mode} />}
      <About mode={mode} />
      {isMobileDevice ? <></> : <WIDNSection mode={mode} />}
      {isMobileDevice ? <></> : <Coursework mode={mode} />}
      <Skillset mode={mode} />
      <Professional mode={mode} />
      <Projects projectData={projectData} mode={mode} />
    </>
  );
};

export default Main;
