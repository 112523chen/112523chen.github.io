import React from "react";
import Display from "../Display/Display";
import About from "../About/About";
import Skillset from "../Skillset/Skillset";
import Projects from "../Projects/Projects";
import { LightState, ProjectType } from "../model";
import Professional from "../Professional/Professional";
import Navigation from "../Navigation/Navigation";
import Roadmap from "../Roadmap/Roadmap";
import Contact from "../Contact/Contact";

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
      <Skillset mode={mode} />
      <Professional mode={mode} />
      {isMobileDevice ? (
        <></>
      ) : (
        <Projects projectData={projectData} mode={mode} />
      )}
      {isMobileDevice ? <></> : <Roadmap mode={mode} />}
      {isMobileDevice ? <></> : <Contact mode={mode} />}
    </>
  );
};

export default Main;
