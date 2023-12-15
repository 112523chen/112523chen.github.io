import styled from "styled-components";
import { LightState } from "../model";
import { getAccentColor } from "../../functions/helper";

interface Props {
  mode?: LightState;
}

export const ContactBase = styled.div`
  min-width: 21rem;
  padding: 0 20%;
  margin-block-end: 30rem;
  @media only screen and (max-width: 24rem) {
    padding: 0 min(5rem, 1rem);
  }
`;

export const ContactParaph = styled.p``;

export const EmailLink = styled.a<Props>`
  text-decoration: none;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: ${(props) => getAccentColor(props)};
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  color: ${(props) => (props.mode === "light" ? "black" : "#e7e7e7")};
  &:hover {
    color: ${(props) => getAccentColor(props)};
  }
`;

export const LinkedInLink = styled.a<Props>`
  text-decoration: none;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: ${(props) => getAccentColor(props)};
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  color: ${(props) => (props.mode === "light" ? "black" : "#e7e7e7")};
  &:hover {
    color: ${(props) => getAccentColor(props)};
  }
`;
