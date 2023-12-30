import styled from "styled-components";
import { LightState } from "../model";
import {
  getAccentColor,
  getBackgroundColor,
  getBoxShadowColor,
  getHoverColor,
} from "../../functions/helper";

interface ProjectModeProps {
  mode: LightState;
}

export const ProjectAltBase = styled.div<ProjectModeProps>`
  background-color: ${(props) => (props.mode === "light" ? "white" : "silver")};
  width: 50rem;
  margin: 1rem;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.mode === "light"
      ? "0 5px 0 0 #0000001a, 0 4px 6px -2px #0000000d;"
      : "0 5px 0 0 #ffffff1a, 0 4px 6px -2px #ffffff0d;"};
  color: ${(props) => (props.mode === "light" ? "#000000" : "#ffffff")};
`;

export const ProjectAltTitle = styled.div`
  font-weight: bolder;
  font-style: italic;
  font-size: 2rem;
`;

export const ProjectAltH3 = styled.h3``;

export const ProjectAltDetails = styled.div``;

export const ProjectAltText = styled.p``;

export const ProjectAltSkills = styled.div`
  margin-bottom: 1.5rem;
`;

export const ProjectAltUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style-type: none;
`;

export const ProjectAltLI = styled.li<ProjectModeProps>`
  margin-right: 1rem;
  border: 1px solid ${(props) => getAccentColor(props)};
  border-radius: 3px;
  color: white;
  font-size: 0.8rem;
  padding: 3px 7px 3px 7px;
  box-shadow: inset 0 0 0 0 ${(props) => getAccentColor(props)};
  transition: color 0.2s linear, box-shadow 0.5s linear;
  -webkit-margin-after: 0.5rem;
  margin-block-end: 0.5rem;
  background-color: ${(props) => getBackgroundColor(props)};
  &:hover {
    box-shadow: inset 200px 0 0 0 ${(props) => getAccentColor(props)};
    color: #fff;
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
