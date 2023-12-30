import styled from "styled-components";
import {
  getBackgroundColor,
  getBoxShadowColor,
  getHoverColor,
} from "../../functions/helper";
import { LightState } from "../../components/model";
import { Link } from "react-router-dom";
import Display from "../../components/Display/Display";
import DisplayButton from "../../components/DisplayButton/DisplayButton";

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
  /* position: absolute;
  top: 6%;
  left: 3%; */
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

export const Content = styled.div`
  padding-top: 3%;
  padding-left: 6%;
  padding-right: 6%;

  /* display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%; */

  a {
    background-color: transparent;
    color: #58a6ff;
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
