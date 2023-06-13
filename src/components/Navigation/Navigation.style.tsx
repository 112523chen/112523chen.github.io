import styled from "styled-components";
import { LightState } from "../model";
import {
  getBackgroundColor,
  getBoxShadowColor,
  getHoverColor,
} from "../../functions/helper";

interface NavigationModeProps {
  mode: LightState;
}

interface NavigationLinkProps {
  active: boolean;
  mode: LightState;
}

export const NavigationBase = styled.div<NavigationModeProps>`
  position: fixed;
  right: 3%;
  top: 30%;
`;
export const NavigationLink = styled.a<NavigationLinkProps>`
  display: block;
  color: ${(props) => (props.mode === "dark" ? "#ffffff" : "#000000")};
  text-decoration: none;
  padding: 0.5rem;
  font-size: 1.1rem;
  background-color: ${(props) => (props.active ? "silver" : "inherit")};
  &:hover {
    color: ${(props) => getHoverColor(props)};
  }
  transition: background-color 0.1s ease-in;
  overflow-wrap: break-word;
`;
