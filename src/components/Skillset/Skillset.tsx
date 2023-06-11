import React from "react";
import { LightState } from "../model";
import { SkillSet } from "../../assets/data/skillset.json";
import Heading from "../Heading/Heading";
import {
  SkillsetBase,
  Frame,
  SkillGroup,
  Skillsetp,
  SkillLegend,
} from "./Skillset.style";

type Props = {
  mode: LightState;
};

const Skillset: React.FC<Props> = ({ mode }) => {
  return (
    <SkillsetBase id="skills" className="section">
      <Heading>Skills</Heading>
      <Frame>
        {SkillSet.map((group, index) => {
          let text: string = "";
          for (let index = 0; index < group.values.length; index++) {
            if (index < group.values.length - 1) {
              text += `${group.values[index]}, `;
            } else {
              text += group.values[index];
            }
          }
          return (
            <SkillGroup key={index}>
              <Skillsetp>
                <SkillLegend mode={mode}>{group.text}</SkillLegend>
                {text}
              </Skillsetp>
            </SkillGroup>
          );
        })}
      </Frame>
    </SkillsetBase>
  );
};

export default Skillset;
