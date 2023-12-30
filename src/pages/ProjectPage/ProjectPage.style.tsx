import styled from "styled-components";
import {
  getBackgroundColor,
  getBoxShadowColor,
  getHoverColor,
} from "../../functions/helper";
import { LightState } from "../../components/model";
import { Link } from "react-router-dom";

interface ProjectModeProps {
  mode: LightState;
}

export const ProjectPageBase = styled.div<ProjectModeProps>`
  background-color: ${(props) =>
    props.mode === "light" ? "#fcfcfc" : "#111827"};
  min-height: 100vh;
`;

export const NavBar = styled.div<ProjectModeProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3% 6% 0 6%;
  background-color: ${(props) =>
    props.mode === "light" ? "#fcfcfc" : "#111827"};
`;

export const HomeLink = styled(Link)<ProjectModeProps>`
  background-color: ${(props) => getBackgroundColor(props)};
  padding: 0.5rem;
  border-radius: 5px;
  text-decoration: none;
  color: ${(props) => (props.mode === "light" ? "#000000" : "#ffffff")};
  box-shadow: 0 5px 0 ${(props) => getBoxShadowColor(props)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    color: ${(props) => getHoverColor(props)};
  }
  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`;

export const ContentWrapper = styled.div<ProjectModeProps>`
  /* background-color: ${(props) =>
    props.mode === "light" ? "#fcfcfc" : "#111827"};
  color: ${(props) => (props.mode === "light" ? "#000000" : "#ffffff")}; */
  display: flex;
  justify-content: center;
  padding-bottom: 5%;
`;

export const Content = styled.div`
  padding-top: 3%;
  padding-left: 6%;
  padding-right: 6%;

  max-width: 80%;
  min-width: 60%;

  p {
    overflow-wrap: break-word;
  }

  a {
    background-color: transparent;
    color: #0366d6;
    text-decoration: none;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  a:hover {
    text-decoration: underline;
  }

  a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .footnotes {
    font-size: smaller;
    color: #8b949e;
    border-top: 1px solid #30363d;
  }

  /* Hide the section label for visual users. */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    word-wrap: normal;
    border: 0;
  }

  del code {
    text-decoration: inherit;
  }

  :root {
    --color-canvas-default: #ffffff;
    --color-canvas-subtle: #f6f8fa;
    --color-border-default: #d0d7de;
    --color-border-muted: hsla(210, 18%, 87%, 1);
  }

  /* Dark theme. */
  @media (prefers-color-scheme: dark) {
    :root {
      --color-canvas-default: #0d1117;
      --color-canvas-subtle: #161b22;
      --color-border-default: #30363d;
      --color-border-muted: #21262d;
    }
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    margin-top: 0;
    margin-bottom: 16px;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  tr {
    background-color: var(--color-canvas-default);
    border-top: 1px solid var(--color-border-muted);
  }

  tr:nth-child(2n) {
    background-color: var(--color-canvas-subtle);
  }

  td,
  th {
    padding: 6px 13px;
    border: 1px solid var(--color-border-default);
  }

  th {
    font-weight: 600;
  }

  table img {
    background-color: transparent;
  }

  input[type="checkbox"] {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }

  input[type="checkbox"]:dir(rtl) {
    margin: 0 -1.6em 0.25em 0.2em;
  }

  code,
  tt {
    margin: 0 2px;
    padding: 0 5px;
    white-space: nowrap;
    border: 1px solid #eaeaea;
    background-color: #f8f8f8;
    border-radius: 3px;
  }

  pre code {
    margin: 0;
    padding: 0;
    white-space: pre;
    border: none;
    background: transparent;
  }

  .highlight pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
  }

  pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
  }

  pre code,
  pre tt {
    /* background-color: transparent;
    border: none; */
  }
`;

export const ProjectAltLinkButton = styled.div<ProjectModeProps>`
  flex: 50%;
  background-color: ${(props) => getBackgroundColor(props)};
  width: fit-content;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 5px 0 ${(props) => getBoxShadowColor(props)};
  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`;

export const ProjectAltLink = styled.a<ProjectModeProps>`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    color: ${(props) => getHoverColor(props)};
  }
`;
