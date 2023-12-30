import React from "react";
import DisplayButton from "../components/DisplayButton/DisplayButton";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import { LightState, ProjectType } from "../components/model";

interface Props {
  mode: LightState;
  setMode: React.Dispatch<React.SetStateAction<LightState>>;
  projectData: ProjectType[];
  isMobileDevice: boolean;
}

const MainPage: React.FC<Props> = ({
  mode,
  setMode,
  projectData,
  isMobileDevice,
}) => {
  return (
    <div>
      <DisplayButton mode={mode} setMode={setMode} useInMainPage={true} />
      <Main
        projectData={projectData}
        mode={mode}
        isMobileDevice={isMobileDevice}
      />
      <Footer mode={mode} />
    </div>
  );
};

export default MainPage;
