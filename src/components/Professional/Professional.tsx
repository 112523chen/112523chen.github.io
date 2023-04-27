import React from "react";
import { History } from "../../assets/data/history.json";
import { Frame, ProfessionalBase } from "./Professional.style";
import Heading from "../Heading/Heading";
import { LightState } from "../model";
import Role from "../Role/Role";

type Props = {
  mode: LightState;
};

const Professional: React.FC<Props> = ({ mode }) => {
  return (
    <ProfessionalBase>
      <Heading>Professional Experience</Heading>
      <Frame>
        {History.map((role) => (
          <Role roleData={role} mode={mode} />
        ))}
      </Frame>
    </ProfessionalBase>
  );
};

export default Professional;
