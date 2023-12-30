import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { projectData } from "./assets/data/projectData.json";
import { theme } from "./styles/theme";
import { LightState } from "./components/model";
import {
  checkForMobileDevice,
  getUserPreferredTheme,
} from "./functions/helper";
import MainPage from "./pages/MainPage";
import ProjectPages from "./pages/ProjectPages/ProjectPages";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

interface AppProps {
  mode: LightState;
}

const AppBase = styled.div<AppProps>`
  background-color: ${(props) => (props.mode === "light" ? "#fff" : "#111827")};
  color: ${(props) => (props.mode === "light" ? "" : "#e7e7e7")};
`;

const App: React.FC = () => {
  // Reference of user's device
  const isMobileDevice: boolean = checkForMobileDevice();
  // Reference of user's theme
  const colorState: LightState = getUserPreferredTheme();

  // State of application's theme
  const [mode, setMode] = useState<LightState>(colorState);

  return (
    <ThemeProvider theme={theme}>
      <AppBase mode={mode} data-testid="app">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  mode={mode}
                  setMode={setMode}
                  projectData={projectData}
                  isMobileDevice={isMobileDevice}
                />
              }
            />
            <Route path="/project/">
              <Route
                path=":id"
                element={
                  <ProjectPage
                    mode={mode}
                    setMode={setMode}
                    projectData={projectData}
                  />
                }
              />
            </Route>

            <Route
              path="/projects"
              element={
                <ProjectPages
                  mode={mode}
                  setMode={setMode}
                  projectData={projectData}
                />
              }
            >
              <Route
                path=":type"
                element={
                  <ProjectPages
                    mode={mode}
                    setMode={setMode}
                    projectData={projectData}
                  />
                }
              />
            </Route>
            <Route path="*" element={<NotFoundPage mode={mode} />} />
          </Routes>
        </BrowserRouter>
      </AppBase>
    </ThemeProvider>
  );
};

export default App;
