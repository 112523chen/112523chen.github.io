import styled from "styled-components";
import { LightState } from "../model";
import { getHoverColor } from "../../functions/helper";

interface ButtonProps {
  mode: LightState;
  hoverColor: string;
}

interface ModeDisplayProps {
  useInMainPage?: boolean;
}

export const ModeDisplay = styled.div<ModeDisplayProps>`
  ${(props) => (props.useInMainPage ? "position: absolute;" : "")}
  ${(props) => (props.useInMainPage ? "top: 6%;" : "")}
  ${(props) => (props.useInMainPage ? "right: 6%;" : "")} 
  ${(props) =>
    props.useInMainPage
      ? "@media only screen and (max-width: 24rem) {right: 10%;}"
      : ""}
`;

export const Button = styled.button<ButtonProps>`
  background: none;
  border: none;
  border-radius: 5px;
  padding: 6px 6px;
  display: flex;
  transition: color 0.3s linear, box-shadow 0.3s linear;
  &:hover {
    background-color: ${(props) => props.hoverColor};
    border: #b3b3b3 solid 2px;
    padding: 4px;
    box-shadow: 0 5px #7d7d7d;
    color: ${(props) => getHoverColor(props)};
  }
  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`;
