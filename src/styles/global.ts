import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  font-family: "Inter";
  overscroll-behavior: none;
}
`;
