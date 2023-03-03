import styled from "styled-components";
import { LightState } from "../model";

interface ButtonProps {
  mode: LightState;
  hoverColor: string;
}

export const ModeDisplay = styled.div`
  position: absolute;
  right: 6%;
  top: 6%;
  @media only screen and (max-width: 24rem) {
    right: 10%;
  }
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
    color: ${(props) =>
      props.mode === "light"
        ? props.theme.color.lightMode.hover
        : props.theme.color.darkMode.hover};
  }
  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`;
