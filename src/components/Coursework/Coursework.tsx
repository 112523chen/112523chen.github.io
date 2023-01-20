import React from "react";
import styled from "styled-components";
import {
  CS_Coursework,
  DS_Coursework,
} from "../../assets/data/coursework.json";
import { LightState } from "../model";
import Heading from "../Heading/Heading";

interface Props {
  mode: LightState;
  className?: string;
}

interface SectionHeadingProps {
  mode: LightState;
}

const CourseworkBase = styled.div`
  min-width: 21rem;
  padding: 0 20%;
  -webkit-margin-after: 15rem;
  margin-block-end: 15rem;
`;

const CourseworkCourse = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const CourseworkSectionHeading = styled.div<SectionHeadingProps>`
  font-size: 2rem;
  margin-block: 2rem;
  color: ${(props) =>
    props.mode === "light"
      ? props.theme.color.lightMode.accent
      : props.theme.color.darkMode.accent};
`;

const CourseworkCS = styled.div`
  margin-right: 1rem;
`;

const CourseworkDS = styled.div`
  margin-left: 1rem;
`;

export const Courseworkp = styled.p`
  font-size: 1.1rem;
`;

const Coursework: React.FC<Props> = ({ mode }) => {
  return (
    <CourseworkBase data-testid="courseworkSection">
      <Heading>Relevant Coursework</Heading>
      <CourseworkCourse>
        <CourseworkCS>
          <CourseworkSectionHeading mode={mode}>
            Computer Science
          </CourseworkSectionHeading>
          {CS_Coursework.map((course, index) => (
            <Courseworkp key={index}>{course}</Courseworkp>
          ))}
        </CourseworkCS>
        <CourseworkDS>
          <CourseworkSectionHeading mode={mode}>
            Data Science
          </CourseworkSectionHeading>
          {DS_Coursework.map((course, index) => (
            <Courseworkp key={index}>{course}</Courseworkp>
          ))}
        </CourseworkDS>
      </CourseworkCourse>
    </CourseworkBase>
  );
};

export default Coursework;
