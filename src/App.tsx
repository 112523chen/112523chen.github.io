import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import DisplayButton from "./components/DisplayButton/DisplayButton";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { projectData } from "./assets/data/projectData.json";
import { theme } from "./styles/theme";
import { LightState } from "./components/model";

interface AppProps {
  mode: LightState;
}

const AppBase = styled.div<AppProps>`
  background-color: ${(props) => (props.mode === "light" ? "#fff" : "#111827")};
  color: ${(props) => (props.mode === "light" ? "" : "#e7e7e7")};
`;

const App: React.FC = () => {
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(navigator.userAgent);

  const colorState: LightState = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches
    ? "dark"
    : "light";

  const [mode, setMode] = useState<LightState>(colorState);

  return (
    <ThemeProvider theme={theme}>
      <AppBase mode={mode} data-testid="app">
        <DisplayButton mode={mode} setMode={setMode} />
        <Main
          projectData={projectData}
          mode={mode}
          isMobileDevice={isMobileDevice}
        />
        <Footer mode={mode} />
      </AppBase>
    </ThemeProvider>
  );
};

export default App;
