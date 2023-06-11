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
  top: 10%;
  width: 10%;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: ${(props) => getBackgroundColor(props)};
  box-shadow: 0px 7px 0px ${(props) => getBoxShadowColor(props)};
`;
export const NavigationLink = styled.a<NavigationLinkProps>`
  display: block;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 1rem;
  text-decoration: none;
  background-color: ${(props) =>
    props.active ? getBoxShadowColor(props) : "inherit"};
  &:hover {
    color: ${(props) => getHoverColor(props)};
  }
  transition: background-color 0.1s ease-in;
  overflow-wrap: break-word;
`;
