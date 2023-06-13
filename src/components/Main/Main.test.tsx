import { DefaultTheme, ThemeProvider } from "styled-components";
import { LightState } from "../model";
import Main from "./Main";
import { theme as normalTheme } from "../../styles/theme";
import { render, screen } from "@testing-library/react";
import { projectData } from "../../assets/data/projectData.json";
import "@testing-library/jest-dom";

describe("Main Component", () => {
  test("Coursework component is rendered when device is not mobile", () => {
    let mode: LightState = "dark";
    let theme: DefaultTheme = normalTheme;
    let isMobile: boolean = false;

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Main projectData={projectData} isMobileDevice={isMobile} mode={mode} />
      </ThemeProvider>
    );

    expect(container.childElementCount).toEqual(8);
  });

  test("Coursework component is not rendered when device is mobile", () => {
    let mode: LightState = "dark";
    let theme: DefaultTheme = normalTheme;
    let isMobile: boolean = true;

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Main projectData={projectData} isMobileDevice={isMobile} mode={mode} />
      </ThemeProvider>
    );

    expect(container.childElementCount).toEqual(4);
  });
});
