import { useEffect, useState } from "react";
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

const App: React.FC = () => {
  let details = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);

  const colorState: LightState = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches
    ? "dark"
    : "light";

  const [mode, setMode] = useState<LightState>(colorState);

  const AppBase = styled.div<AppProps>`
    background-color: ${(props) =>
      props.mode === "light" ? "#fff" : "#111827"};
    color: ${(props) => (props.mode === "light" ? "" : "#e7e7e7")};
  `;

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
