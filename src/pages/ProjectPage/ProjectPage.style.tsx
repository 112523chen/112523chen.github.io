import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  getBackgroundColor,
  getBoxShadowColor,
  getHoverColor,
} from "../../functions/helper";
import { LightState } from "../../components/model";

interface ProjectModeProps {
  mode: LightState;
}

export const ProjectPageBase = styled.div<ProjectModeProps>`
  background-color: ${(props) =>
    props.mode === "light" ? "#fcfcfc" : "#111827"};
  min-height: 100vh;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0 0 3rem 0;
  padding: 3rem 0 0 0;
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
  position: absolute;
  top: 6%;
  left: 3%;
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

export const FrameAlt = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 10rem;
`;

export const TopicFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;

export const FilterLink = styled(Link)<ProjectModeProps>`
  margin: 0 1rem;
  background-color: ${(props) => getBackgroundColor(props)};
  padding: 0.5rem;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0 5px 0 ${(props) => getBoxShadowColor(props)};
  color: ${(props) => (props.mode === "light" ? "#000000" : "#ffffff")};
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
  min-width: 6.2rem;
`;
