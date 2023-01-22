import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { DefaultTheme, ThemeProvider } from "styled-components";
import Coursework from "./Coursework";
import { LightState } from "../model";
import { theme as normalTheme } from "../../styles/theme";

describe("Coursework Component", () => {
  test("Coursework component is rendered", () => {
    let mode: LightState = "light";
    let theme: DefaultTheme = normalTheme;

    render(
      <ThemeProvider theme={theme}>
        <Coursework mode={mode} />
      </ThemeProvider>
    );

    expect(screen.getByTestId("courseworkSection")).toBeInTheDocument();
  });

  test("Coursework section headings have light color theme on `light` mode", () => {
    let mode: LightState = "light";
    let theme: DefaultTheme = normalTheme;
    let lightAccentColor: string = theme.color.lightMode.accent;

    render(
      <ThemeProvider theme={theme}>
        <Coursework mode={mode} />
      </ThemeProvider>
    );

    const leftHeading = screen.getByText("Computer Science");
    const rightHeading = screen.getByText("Data Science");

    expect(leftHeading).toHaveStyleRule("font-size", "2rem");
    expect(leftHeading).toHaveStyleRule("margin-block", "2rem");
    expect(rightHeading).toHaveStyleRule("font-size", "2rem");
    expect(rightHeading).toHaveStyleRule("margin-block", "2rem");

    expect(leftHeading).toHaveStyleRule("color", lightAccentColor);
    expect(rightHeading).toHaveStyleRule("color", lightAccentColor);
  });

  test("Coursework section headings have dark color theme on `dark` mode", () => {
    let mode: LightState = "dark";
    let theme: DefaultTheme = normalTheme;
    let darkAccentColor: string = theme.color.darkMode.accent;

    render(
      <ThemeProvider theme={theme}>
        <Coursework mode={mode} />
      </ThemeProvider>
    );

    const leftHeading = screen.getByText("Computer Science");
    const rightHeading = screen.getByText("Data Science");

    expect(leftHeading).toHaveStyleRule("font-size", "2rem");
    expect(leftHeading).toHaveStyleRule("margin-block", "2rem");

    expect(rightHeading).toHaveStyleRule("font-size", "2rem");
    expect(rightHeading).toHaveStyleRule("margin-block", "2rem");

    expect(leftHeading).toHaveStyleRule("color", darkAccentColor);
    expect(rightHeading).toHaveStyleRule("color", darkAccentColor);
  });

  test("Coursework is rendered", () => {
    let mode: LightState = "dark";
    let theme: DefaultTheme = normalTheme;
    let darkAccentColor: string = theme.color.darkMode.accent;

    render(
      <ThemeProvider theme={theme}>
        <Coursework mode={mode} />
      </ThemeProvider>
    );
  });

  //TODO: Add test if mapped components are rendered correctly
});
