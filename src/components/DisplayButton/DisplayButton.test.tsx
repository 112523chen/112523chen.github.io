import { fireEvent, render, screen } from "@testing-library/react";
import DisplayButton from "./DisplayButton";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { theme as normalTheme } from "../../styles/theme";
import { LightState } from "../model";
import { useState } from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";

describe("DisplayButton Components", () => {
  describe("Normal State", () => {
    test("Mouse click from `light` mode results in a change to `dark` mode", () => {
      let colorState: LightState = "light";
      let theme: DefaultTheme = normalTheme;

      const Wrapper: React.FC = () => {
        const [mode, setMode] = useState<LightState>(colorState);
        return <DisplayButton mode={mode} setMode={setMode} />;
      };

      render(
        <ThemeProvider theme={theme}>
          <Wrapper />
        </ThemeProvider>
      );

      const button = screen.getByRole("button");

      expect(screen.getByTestId("lightIcon")).toBeInTheDocument();

      fireEvent.click(button);

      expect(screen.getByTestId("darkIcon")).toBeInTheDocument();
    });
    test("Mouse click from `dark` mode results in a change to `light` mode", () => {
      let colorState: LightState = "dark";
      let theme: DefaultTheme = normalTheme;

      const Wrapper: React.FC = () => {
        const [mode, setMode] = useState<LightState>(colorState);
        return <DisplayButton mode={mode} setMode={setMode} />;
      };

      render(
        <ThemeProvider theme={theme}>
          <Wrapper />
        </ThemeProvider>
      );

      const button = screen.getByRole("button");

      expect(screen.getByTestId("darkIcon")).toBeInTheDocument();

      fireEvent.click(button);

      expect(screen.getByTestId("lightIcon")).toBeInTheDocument();
    });
  });
  describe("Hover State", () => {
    test("Mouse hover in to `light` mode enters `light` theme hover", () => {
      let colorState: LightState = "light";
      let theme: DefaultTheme = normalTheme;

      const Wrapper: React.FC = () => {
        const [mode, setMode] = useState<LightState>(colorState);
        return <DisplayButton mode={mode} setMode={setMode} />;
      };

      render(
        <ThemeProvider theme={theme}>
          <Wrapper />
        </ThemeProvider>
      );

      const button = screen.getByRole("button");

      expect(screen.getByTestId("lightIcon")).toHaveStyleRule(
        "background-color",
        undefined
      );
      expect(screen.getByTestId("lightIcon")).toHaveStyleRule(
        "color",
        undefined
      );

      fireEvent.mouseEnter(button);

      expect(screen.getByTestId("lightIcon")).toHaveStyleRule(
        "background-color",
        "rgba(0,0,0,.06)",
        {
          modifier: ":hover",
        }
      );
      expect(screen.getByTestId("lightIcon")).toHaveStyleRule(
        "color",
        theme.color.lightMode.hover,
        {
          modifier: ":hover",
        }
      );
    });
    test("Mouse hover out pf `light` mode leave `light` theme hover ", () => {
      let colorState: LightState = "light";
      let theme: DefaultTheme = normalTheme;

      const Wrapper: React.FC = () => {
        const [mode, setMode] = useState<LightState>(colorState);
        return <DisplayButton mode={mode} setMode={setMode} />;
      };

      render(
        <ThemeProvider theme={theme}>
          <Wrapper />
        </ThemeProvider>
      );

      const button = screen.getByRole("button");

      expect(screen.getByTestId("lightIcon")).toHaveStyleRule(
        "background-color",
        undefined
      );
      expect(screen.getByTestId("lightIcon")).toHaveStyleRule(
        "color",
        undefined
      );

      fireEvent.mouseEnter(button);

      expect(screen.getByTestId("lightIcon")).toHaveStyleRule(
        "background-color",
        "rgba(0,0,0,.06)",
        {
          modifier: ":hover",
        }
      );
      expect(screen.getByTestId("lightIcon")).toHaveStyleRule(
        "color",
        theme.color.lightMode.hover,
        {
          modifier: ":hover",
        }
      );
      fireEvent.mouseLeave(button);

      expect(screen.getByTestId("lightIcon")).toHaveStyleRule(
        "background-color",
        undefined
      );
      expect(screen.getByTestId("lightIcon")).toHaveStyleRule(
        "color",
        undefined
      );
    });
    test("Mouse hover in to `dark` mode enters dark theme hover ", () => {
      let colorState: LightState = "dark";
      let theme: DefaultTheme = normalTheme;

      const Wrapper: React.FC = () => {
        const [mode, setMode] = useState<LightState>(colorState);
        return <DisplayButton mode={mode} setMode={setMode} />;
      };

      render(
        <ThemeProvider theme={theme}>
          <Wrapper />
        </ThemeProvider>
      );

      const button = screen.getByRole("button");

      expect(screen.getByTestId("darkIcon")).toHaveStyleRule(
        "background-color",
        undefined
      );
      expect(screen.getByTestId("darkIcon")).toHaveStyleRule(
        "color",
        undefined
      );

      fireEvent.mouseEnter(button);

      expect(screen.getByTestId("darkIcon")).toHaveStyleRule(
        "background-color",
        "#b3b3b3",
        {
          modifier: ":hover",
        }
      );
      expect(screen.getByTestId("darkIcon")).toHaveStyleRule(
        "color",
        theme.color.darkMode.hover,
        {
          modifier: ":hover",
        }
      );
    });
    test("Mouse hover out of `dark` mode leave dark theme hover ", () => {
      let colorState: LightState = "dark";
      let theme: DefaultTheme = normalTheme;

      const Wrapper: React.FC = () => {
        const [mode, setMode] = useState<LightState>(colorState);
        return <DisplayButton mode={mode} setMode={setMode} />;
      };

      render(
        <ThemeProvider theme={theme}>
          <Wrapper />
        </ThemeProvider>
      );

      const button = screen.getByRole("button");

      expect(screen.getByTestId("darkIcon")).toHaveStyleRule(
        "background-color",
        undefined
      );
      expect(screen.getByTestId("darkIcon")).toHaveStyleRule(
        "color",
        undefined
      );

      fireEvent.mouseEnter(button);

      expect(screen.getByTestId("darkIcon")).toHaveStyleRule(
        "background-color",
        "#b3b3b3",
        {
          modifier: ":hover",
        }
      );
      expect(screen.getByTestId("darkIcon")).toHaveStyleRule(
        "color",
        theme.color.darkMode.hover,
        {
          modifier: ":hover",
        }
      );
      fireEvent.mouseLeave(button);

      expect(screen.getByTestId("darkIcon")).toHaveStyleRule(
        "background-color",
        undefined
      );
      expect(screen.getByTestId("darkIcon")).toHaveStyleRule(
        "color",
        undefined
      );
    });
  });
});
