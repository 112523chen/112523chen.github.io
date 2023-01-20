/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { GlobalStyles } from "./styles/global";

describe("App", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test("Renders App", () => {
    render(
      <>
        <GlobalStyles />
        <App />
      </>
    );
  });

  test("Theme changes from user clicking the button", () => {
    render(
      <>
        <GlobalStyles />
        <App />
      </>
    );

    const button = screen.getByTestId("lightIcon");
    const app = screen.getByTestId("app");

    expect(window.matchMedia("(prefers-color-scheme:dark)").matches).toBeTruthy;
    expect(app).toBeInTheDocument();
    expect(app).toHaveStyle({ backgroundColor: "111827" });
    expect(app).toHaveStyle({ color: "e7e7e7" });

    fireEvent.click(button);

    expect(app).toHaveStyle({ backgroundColor: "" });
    expect(app).toHaveStyle({ color: "#e7e7e7" });
  });
});
