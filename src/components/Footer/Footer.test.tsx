import { DefaultTheme, ThemeProvider } from "styled-components";
import { LightState } from "../model";
import { theme as normalTheme } from "../../styles/theme";
import Footer from "./Footer";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

describe("Footer Component", () => {
  test("Component has Light Color Theme when `light` mode", () => {
    let mode: LightState = "light";
    let theme: DefaultTheme = normalTheme;
    let lightAccentColor: string = theme.color.lightMode.accent;
    let darkAccentColor: string = theme.color.darkMode.accent;
    let lightActiveColor: string = theme.color.lightMode.active;
    let darkActiveColor: string = theme.color.darkMode.active;

    render(
      <ThemeProvider theme={theme}>
        <Footer mode={mode} />
      </ThemeProvider>
    );

    const emailLink: HTMLElement = screen.getByText("Email");
    const githubLink: HTMLElement = screen.getByText("GitHub");
    const linkedinLink: HTMLElement = screen.getByText("LinkedIn");
    const resumeLink: HTMLElement = screen.getByText("Resume");

    expect(emailLink).toHaveStyleRule("color", "black");
    expect(emailLink).not.toHaveStyleRule("color", "#e7e7e7");
    expect(emailLink).toHaveStyleRule(
      "border-bottom",
      `1px solid ${lightAccentColor}`
    );
    expect(emailLink).not.toHaveStyleRule(
      "border-bottom",
      `1px solid ${darkAccentColor}`
    );
    expect(emailLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${lightAccentColor}`
    );
    expect(emailLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${darkAccentColor}`
    );
    expect(emailLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${lightAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(emailLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${darkAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(emailLink).toHaveStyleRule("color", lightActiveColor, {
      modifier: ":active",
    });
    expect(emailLink).not.toHaveStyleRule("color", darkActiveColor, {
      modifier: ":active",
    });
    expect(githubLink).toHaveStyleRule("color", "black");
    expect(githubLink).not.toHaveStyleRule("color", "#e7e7e7");
    expect(githubLink).toHaveStyleRule(
      "border-bottom",
      `1px solid ${lightAccentColor}`
    );
    expect(githubLink).not.toHaveStyleRule(
      "border-bottom",
      `1px solid ${darkAccentColor}`
    );
    expect(githubLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${lightAccentColor}`
    );
    expect(githubLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${darkAccentColor}`
    );
    expect(githubLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${lightAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(githubLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${darkAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(githubLink).toHaveStyleRule("color", lightActiveColor, {
      modifier: ":active",
    });
    expect(githubLink).not.toHaveStyleRule("color", darkActiveColor, {
      modifier: ":active",
    });
    expect(linkedinLink).toHaveStyleRule("color", "black");
    expect(linkedinLink).not.toHaveStyleRule("color", "#e7e7e7");
    expect(linkedinLink).toHaveStyleRule(
      "border-bottom",
      `1px solid ${lightAccentColor}`
    );
    expect(linkedinLink).not.toHaveStyleRule(
      "border-bottom",
      `1px solid ${darkAccentColor}`
    );
    expect(linkedinLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${lightAccentColor}`
    );
    expect(linkedinLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${darkAccentColor}`
    );
    expect(linkedinLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${lightAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(linkedinLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${darkAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(linkedinLink).toHaveStyleRule("color", lightActiveColor, {
      modifier: ":active",
    });
    expect(linkedinLink).not.toHaveStyleRule("color", darkActiveColor, {
      modifier: ":active",
    });
    expect(resumeLink).toHaveStyleRule("color", "black");
    expect(resumeLink).not.toHaveStyleRule("color", "#e7e7e7");
    expect(resumeLink).toHaveStyleRule(
      "border-bottom",
      `1px solid ${lightAccentColor}`
    );
    expect(resumeLink).not.toHaveStyleRule(
      "border-bottom",
      `1px solid ${darkAccentColor}`
    );
    expect(resumeLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${lightAccentColor}`
    );
    expect(resumeLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${darkAccentColor}`
    );
    expect(resumeLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${lightAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(resumeLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${darkAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(resumeLink).toHaveStyleRule("color", lightActiveColor, {
      modifier: ":active",
    });
    expect(resumeLink).not.toHaveStyleRule("color", darkActiveColor, {
      modifier: ":active",
    });
  });
  test("Component has Dark Color Theme when `dark` mode", () => {
    let mode: LightState = "dark";
    let theme: DefaultTheme = normalTheme;
    let lightAccentColor: string = theme.color.lightMode.accent;
    let darkAccentColor: string = theme.color.darkMode.accent;
    let lightActiveColor: string = theme.color.lightMode.active;
    let darkActiveColor: string = theme.color.darkMode.active;

    render(
      <ThemeProvider theme={theme}>
        <Footer mode={mode} />
      </ThemeProvider>
    );

    const emailLink: HTMLElement = screen.getByText("Email");
    const githubLink: HTMLElement = screen.getByText("GitHub");
    const linkedinLink: HTMLElement = screen.getByText("LinkedIn");
    const resumeLink: HTMLElement = screen.getByText("Resume");

    expect(emailLink).toHaveStyleRule("color", "#e7e7e7");
    expect(emailLink).not.toHaveStyleRule("color", "black");
    expect(emailLink).toHaveStyleRule(
      "border-bottom",
      `1px solid ${darkAccentColor}`
    );
    expect(emailLink).not.toHaveStyleRule(
      "border-bottom",
      `1px solid ${lightAccentColor}`
    );
    expect(emailLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${darkAccentColor}`
    );
    expect(emailLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${lightAccentColor}`
    );
    expect(emailLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${darkAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(emailLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${lightAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(emailLink).toHaveStyleRule("color", darkActiveColor, {
      modifier: ":active",
    });
    expect(emailLink).not.toHaveStyleRule("color", lightActiveColor, {
      modifier: ":active",
    });
    expect(githubLink).toHaveStyleRule("color", "#e7e7e7");
    expect(githubLink).not.toHaveStyleRule("color", "black");
    expect(githubLink).toHaveStyleRule(
      "border-bottom",
      `1px solid ${darkAccentColor}`
    );
    expect(githubLink).not.toHaveStyleRule(
      "border-bottom",
      `1px solid ${lightAccentColor}`
    );
    expect(githubLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${darkAccentColor}`
    );
    expect(githubLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${lightAccentColor}`
    );
    expect(githubLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${darkAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(githubLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${lightAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(githubLink).toHaveStyleRule("color", darkActiveColor, {
      modifier: ":active",
    });
    expect(githubLink).not.toHaveStyleRule("color", lightActiveColor, {
      modifier: ":active",
    });
    expect(linkedinLink).toHaveStyleRule("color", "#e7e7e7");
    expect(linkedinLink).not.toHaveStyleRule("color", "black");
    expect(linkedinLink).toHaveStyleRule(
      "border-bottom",
      `1px solid ${darkAccentColor}`
    );
    expect(linkedinLink).not.toHaveStyleRule(
      "border-bottom",
      `1px solid ${lightAccentColor}`
    );
    expect(linkedinLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${darkAccentColor}`
    );
    expect(linkedinLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${lightAccentColor}`
    );
    expect(linkedinLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${darkAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(linkedinLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${lightAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(linkedinLink).toHaveStyleRule("color", darkActiveColor, {
      modifier: ":active",
    });
    expect(linkedinLink).not.toHaveStyleRule("color", lightActiveColor, {
      modifier: ":active",
    });
    expect(resumeLink).toHaveStyleRule("color", "#e7e7e7");
    expect(resumeLink).not.toHaveStyleRule("color", "black");
    expect(resumeLink).toHaveStyleRule(
      "border-bottom",
      `1px solid ${darkAccentColor}`
    );
    expect(resumeLink).not.toHaveStyleRule(
      "border-bottom",
      `1px solid ${lightAccentColor}`
    );
    expect(resumeLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${darkAccentColor}`
    );
    expect(resumeLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0 0 ${lightAccentColor}`
    );
    expect(resumeLink).toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${darkAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(resumeLink).not.toHaveStyleRule(
      "box-shadow",
      `inset 0 -200px 0 0 ${lightAccentColor}`,
      {
        modifier: ":hover",
      }
    );
    expect(resumeLink).toHaveStyleRule("color", darkActiveColor, {
      modifier: ":active",
    });
    expect(resumeLink).not.toHaveStyleRule("color", lightActiveColor, {
      modifier: ":active",
    });
  });
  test("Links should direct users to second webpage", () => {
    let mode: LightState = "dark";
    let theme: DefaultTheme = normalTheme;

    render(
      <ThemeProvider theme={theme}>
        <Footer mode={mode} />
      </ThemeProvider>
    );

    const links: HTMLAnchorElement[] = screen.getAllByRole("link");

    expect(links.length).toEqual(4);

    expect(links[0].textContent).toEqual("Email");
    expect(links[0].href).toEqual("mailto:itsalexchen@gmail.com");
    expect(links[0].target).toEqual("_blank");

    expect(links[1].textContent).toEqual("GitHub");
    expect(links[1].href).toEqual("https://github.com/112523chen");
    expect(links[2].target).toEqual("_blank");

    expect(links[2].textContent).toEqual("LinkedIn");
    expect(links[2].href).toEqual(
      "https://www.linkedin.com/in/alex-chen-112523chen/"
    );
    expect(links[2].target).toEqual("_blank");

    expect(links[3].textContent).toEqual("Resume");
    expect(links[3].href).toEqual("http://localhost/AlexChenResume.pdf");
    expect(links[3].target).toEqual("_blank");
  });
});
