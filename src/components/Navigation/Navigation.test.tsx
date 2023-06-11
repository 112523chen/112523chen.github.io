import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Navigation from "./Navigation";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { LightState } from "../model";
import { theme as normalTheme } from "../../styles/theme";

describe("Navigation", () => {
  test("should render", () => {
    // Mock the necessary properties and methods
    const scrollHeight = 1000;
    Object.defineProperty(window, "pageYOffset", {
      value: 500,
      writable: true,
    });
    Object.defineProperty(document.documentElement, "scrollTop", {
      value: 500,
      writable: true,
    });
    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: scrollHeight,
      writable: true,
    });

    // Render the Sidebar component with the "mode" prop
    let mode: LightState = "dark";
    const { container } = render(
      <ThemeProvider theme={normalTheme}>
        <Navigation mode={mode} />
      </ThemeProvider>
    );

    // Trigger the scroll event
    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    // Get the active section based on the sidebar content
    const activeSection =
      container.getElementsByTagName("a")[0].attributes[1].value;

    // Assert the active section matches the expected value
    expect(activeSection).toEqual("#home-section");
  });
});
