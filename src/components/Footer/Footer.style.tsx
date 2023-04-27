import styled from "styled-components";
import { LightState } from "../model";
import { getAccentColor, getActiveColor } from "../../functions/helper";

interface LinkModeProps {
  mode: LightState;
}

export const FooterBase = styled.footer`
  min-width: 21rem;
  padding: 0 1rem 0.5rem 1rem;
  display: flex;
  @media only screen and (max-width: 24rem) {
    padding: 0 min(5rem, 1rem);
    display: inline-block;
  }
`;

export const Left = styled.div`
  width: 0;
`;

export const Middle = styled.div`
  text-align: center;
  font-size: 1rem;
`;

export const P = styled.p``;

export const Right = styled.div`
  margin-left: auto;
  margin-right: 0;
  @media only screen and (max-width: 24rem) {
    margin: 0 11%;
  }
`;

export const UL = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0;
  @media only screen and (max-width: 24rem) {
    justify-content: center;
  }
`;

export const LI = styled.li`
  padding-right: 1rem;
  @media only screen and (max-width: 24rem) {
    margin-bottom: 1.5rem;
  }
`;

export const Link = styled.a<LinkModeProps>`
  text-decoration: none;
  padding: 0.2rem 0.2rem 0;
  color: ${(props) => (props.mode === "light" ? "black" : "#e7e7e7")};
  border-bottom: 1px solid ${(props) => getAccentColor(props)};
  box-shadow: inset 0 0 0 0 ${(props) => getAccentColor(props)};
  transition: color 0.3s linear, box-shadow 2s linear;
  &:hover {
    color: #fff;
    box-shadow: inset 0 -200px 0 0 ${(props) => getAccentColor(props)};
  }
  &:active {
    color: ${(props) => getActiveColor(props)};
  }
`;
