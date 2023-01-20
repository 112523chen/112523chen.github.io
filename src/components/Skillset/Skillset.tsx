import React from "react";
import styled from "styled-components";
import { LightState } from "../model";
import { SkillSet } from "../../assets/data/skillset.json";

type Props = {
  mode: LightState;
  className?: string;
};

interface LegendProps {
  mode: LightState;
}

const SkillsetBase = styled.div`
  min-width: 21rem;
  padding-top: 0;
  padding-right: 20%;
  padding-bottom: 0;
  padding-left: 20%;
  -webkit-margin-after: 15rem;
  margin-block-end: 15rem;
  @media only screen and (max-width: 24rem) {
    padding: 0 min(5rem, 1rem);
    margin-block: 10rem;
  }
`;

const SkillsetHeading = styled.div``;

const SkillsetH2 = styled.h2`
  font-size: 3rem;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 24rem) {
    font-size: 2rem;
  }
`;

const SkillsetHr = styled.hr`
  margin: 0;
  margin-right: 20%;
`;

const Frame = styled.div``;

const SkillGroup = styled.div``;

const Skillsetp = styled.p`
  line-height: 1.6rem;
  max-width: 80%;
`;

const SkillLegend = styled.span<LegendProps>`
  font-weight: 900;
  font-size: 1.1rem;
  margin-right: 0.2rem;
  color: ${(props) =>
    props.mode === "light"
      ? props.theme.color.lightMode.accent
      : props.theme.color.darkMode.accent};
`;

const Skillset: React.FC<Props> = ({ mode }) => {
  return (
    <SkillsetBase>
      <SkillsetHeading>
        <SkillsetH2>Skills</SkillsetH2>
        <SkillsetHr />
      </SkillsetHeading>
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
