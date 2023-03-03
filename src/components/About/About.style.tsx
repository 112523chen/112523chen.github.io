import styled from "styled-components";
import { LightState } from "../model";

interface pProps {
  mode?: LightState;
}

export const AboutBase = styled.div`
  min-width: 21rem;
  padding: 0 20%;
  margin-block-end: 15rem;
  @media only screen and (max-width: 24rem) {
    padding: 0 min(5rem, 1rem);
  }
`;

export const AboutBio = styled.div``;

export const AboutP = styled.p<pProps>`
  line-height: 2;
  max-width: 80%;
  &:nth-child(2) {
    color: ${(props) =>
      props.mode === "light"
        ? props.theme.color.lightMode.accent
        : props.theme.color.darkMode.accent};
  }
`;
