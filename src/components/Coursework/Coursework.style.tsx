import styled from "styled-components";
import { LightState } from "../model";

interface SectionHeadingProps {
  mode: LightState;
}

export const CourseworkBase = styled.div`
  min-width: 21rem;
  padding: 0 20%;
  -webkit-margin-after: 15rem;
  margin-block-end: 15rem;
`;

export const CourseworkCourse = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const CourseworkSectionHeading = styled.div<SectionHeadingProps>`
  font-size: 2rem;
  margin-block: 2rem;
  color: ${(props) =>
    props.mode === "light" ? props.theme.color.lightMode.accent : "red"};
`;

export const CourseworkCS = styled.div`
  margin-left: 1rem;
`;

export const CourseworkDS = styled.div`
  margin-right: 1rem;
`;

export const Courseworkp = styled.p`
  font-size: 1.1rem;
`;
