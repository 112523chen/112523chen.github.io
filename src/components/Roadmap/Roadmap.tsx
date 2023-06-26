import React from "react";
import {
  Bullet,
  BulletContainer,
  Keywords,
  RoadMapBase,
  RoadMapP,
} from "./Roadmap.style";
import Heading from "../Heading/Heading";
import { LightState } from "../model";

interface Props {
  mode: LightState;
}

const RoadMap: React.FC<Props> = ({ mode }) => (
  <RoadMapBase id="road-map" className="section">
    <Heading>What I'm Doing Now</Heading>
    <RoadMapP>
      I'm trying dive deeper into{" "}
      <Keywords mode={mode}>software development</Keywords> specifically
      targeting <Keywords mode={mode}>cloud service</Keywords> and{" "}
      <Keywords mode={mode}>data engineering</Keywords>.
    </RoadMapP>
    <RoadMapP>This is what I spend my time doing:</RoadMapP>
    <BulletContainer>
      <Bullet>
        Working with a team of engineers to{" "}
        <Keywords mode={mode}>expand a nonprofit's data pipelines</Keywords> to
        support data driven decision making
      </Bullet>
      <Bullet>
        Interning at MTA to support data driven decision{" "}
        <Keywords mode={mode}>
          making by maintaining databases and data pipelines
        </Keywords>
      </Bullet>
    </BulletContainer>
    <RoadMapP>These are some of my goals for the next 3 months:</RoadMapP>
    <BulletContainer>
      <Bullet>
        Learn more about <Keywords mode={mode}>Amazon Web Services</Keywords>{" "}
        ecosystem and apply my learnings to my data engineering projects
      </Bullet>
      <Bullet>
        Develop my soft-skills and collaborate more with engineers for my
        volunteer and internship experience this summer
      </Bullet>
    </BulletContainer>
    <RoadMapP>
      Last update was <b>June 26, 2023</b>.
    </RoadMapP>
  </RoadMapBase>
);

export default RoadMap;
