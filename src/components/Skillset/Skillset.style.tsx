import styled from "styled-components";
import { LightState } from "../model";

interface LegendProps {
  mode: LightState;
}

export const SkillsetBase = styled.div`
  min-width: 21rem;
  padding: 0 20%;
  -webkit-margin-after: 15rem;
  margin-block-end: 15rem;
  @media only screen and (max-width: 24rem) {
    padding: 0 min(5rem, 1rem);
    margin-block: 10rem;
  }
`;

export const Frame = styled.div``;

export const SkillGroup = styled.div``;

export const Skillsetp = styled.p`
  line-height: 1.6rem;
  max-width: 80%;
`;

export const SkillLegend = styled.span<LegendProps>`
  font-weight: 900;
  font-size: 1.1rem;
  margin-right: 0.2rem;
  color: ${(props) =>
    props.mode === "light"
      ? props.theme.color.lightMode.accent
      : props.theme.color.darkMode.accent};
`;
