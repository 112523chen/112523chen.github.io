import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import About from "./About";
import { LightState } from "../model";
import { theme as normalTheme } from "../../styles/theme";
import { DefaultTheme, ThemeProvider } from "styled-components";

describe("About Component", () => {
  test("About Component Rendered", () => {
    let mode: LightState = "light";
    let theme: DefaultTheme = normalTheme;

    render(
      <ThemeProvider theme={theme}>
        <About mode={mode} />
      </ThemeProvider>
    );

    expect(screen.getByTestId("aboutSection")).toBeInTheDocument();
  });

  test("Second P Element has Light Color Theme when `light` mode", () => {
    let mode: LightState = "light";
    let theme: DefaultTheme = normalTheme;
    let lightAccentColor: string = theme.color.lightMode.accent;

    render(
      <ThemeProvider theme={theme}>
        <About mode={mode}></About>
      </ThemeProvider>
    );

    //Establish About Section 2nd AboutP Exist
    const HighlightedText = screen.getByTestId("highlightedText");
    expect(HighlightedText).toBeInTheDocument();

    //Establish Default CSS are Right
    expect(HighlightedText).toHaveStyleRule("line-height", "2");
    expect(HighlightedText).toHaveStyleRule("max-width", "80%");

    //Establish CSS for Light Theme are Right
    expect(HighlightedText).toHaveStyleRule("color", lightAccentColor, {
      modifier: ":nth-child(2)",
    });
  });

  test("Second P Element has Dark Color Theme when `dark` mode", () => {
    let mode: LightState = "dark";
    let theme: DefaultTheme = normalTheme;
    let darkAccentColor: string = theme.color.darkMode.accent;

    render(
      <ThemeProvider theme={theme}>
        <About mode={mode}></About>
      </ThemeProvider>
    );

    //Establish About Section 2nd AboutP Exist
    const HighlightedText = screen.getByTestId("highlightedText");
    expect(HighlightedText).toBeInTheDocument();

    //Establish Default CSS are Right
    expect(HighlightedText).toHaveStyleRule("line-height", "2");
    expect(HighlightedText).toHaveStyleRule("max-width", "80%");

    //Establish CSS for Light Theme are Right
    expect(HighlightedText).toHaveStyleRule("color", darkAccentColor, {
      modifier: ":nth-child(2)",
    });
  });
});
