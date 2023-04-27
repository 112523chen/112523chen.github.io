import styled from "styled-components";
import { LightState } from "../model";
import { getAccentColor, getHoverColor } from "../../functions/helper";

interface ProjectModeProps {
  mode: LightState;
}

export const ProjectBase = styled.div`
  padding-block-end: 5rem;
`;

export const ProjectTitle = styled.div`
  font-weight: bolder;
  font-style: italic;
  font-size: 1.2rem;
`;

export const ProjectH3 = styled.h3``;

export const ProjectDetails = styled.div`
  max-width: 80%;
`;

export const Projectp = styled.p``;

export const ProjectSkills = styled.div`
  margin-bottom: 1.5rem;
`;

export const ProjectUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style-type: none;
`;

export const ProjectLI = styled.li<ProjectModeProps>`
  margin-right: 1rem;
  border: 1px solid ${(props) => getAccentColor(props)};
  border-radius: 3px;
  color: ${(props) => getAccentColor(props)};
  font-size: 0.8rem;
  padding: 3px 7px 1px 7px;
  box-shadow: inset 0 0 0 0 ${(props) => getAccentColor(props)};
  transition: color 0.2s linear, box-shadow 0.5s linear;
  -webkit-margin-after: 0.5rem;
  margin-block-end: 0.5rem;
  &:hover {
    box-shadow: inset 200px 0 0 0 ${(props) => getAccentColor(props)};
    color: #fff;
  }
`;

export const ProjectLinkButton = styled.div<ProjectModeProps>`
  flex: 50%;
  background-color: ${(props) =>
    props.mode === "light" ? "#3395ff" : "#00c896"};
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: 10%;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 5px 0
    ${(props) => (props.mode === "light" ? "#2468b3" : "#008c69")};
  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`;

export const ProjectLink = styled.a<ProjectModeProps>`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    color: ${(props) => getHoverColor(props)};
  }
`;
