import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  getBackgroundColor,
  getBoxShadowColor,
  getHoverColor,
} from "../../functions/helper";
import { LightState } from "../model";

interface Props {
  mode: LightState;
}

const ProjectCatalogButton: React.FC<Props> = ({ mode }) => {
  return (
    <ProjectCatalogButtonBase mode={mode} to="/projects">
      See More Projects
    </ProjectCatalogButtonBase>
  );
};

const ProjectCatalogButtonBase = styled(Link)<Props>`
  flex: 50%;
  background-color: ${(props) => getBackgroundColor(props)};
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: 10%;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 5px 0 ${(props) => getBoxShadowColor(props)};
  color: #ffffff;
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

export default ProjectCatalogButton;
