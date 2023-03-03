import React from "react";
import {
  CS_Coursework,
  DS_Coursework,
} from "../../assets/data/coursework.json";
import { LightState } from "../model";
import Heading from "../Heading/Heading";
import {
  CourseworkBase,
  CourseworkCS,
  CourseworkCourse,
  CourseworkDS,
  CourseworkSectionHeading,
  Courseworkp,
} from "./Coursework.style";

interface Props {
  mode: LightState;
  className?: string;
}

const Coursework: React.FC<Props> = ({ mode }) => {
  return (
    <CourseworkBase data-testid="courseworkSection">
      <Heading>Relevant Coursework</Heading>
      <CourseworkCourse>
        <CourseworkDS>
          <CourseworkSectionHeading mode={mode}>
            Data Science
          </CourseworkSectionHeading>
          {DS_Coursework.map((course, index) => (
            <Courseworkp key={index}>{course}</Courseworkp>
          ))}
        </CourseworkDS>
        <CourseworkCS>
          <CourseworkSectionHeading mode={mode}>
            Computer Science
          </CourseworkSectionHeading>
          {CS_Coursework.map((course, index) => (
            <Courseworkp key={index}>{course}</Courseworkp>
          ))}
        </CourseworkCS>
      </CourseworkCourse>
    </CourseworkBase>
  );
};

export default Coursework;
