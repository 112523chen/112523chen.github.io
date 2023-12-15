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
        Working on my <Keywords mode={mode}>personal projects</Keywords> to
        improve my skills in{" "}
        <Keywords mode={mode}>software development</Keywords> and{" "}
        <Keywords mode={mode}>data engineering</Keywords>
      </Bullet>
      <Bullet>
        Learning more about <Keywords mode={mode}>Rust</Keywords> and how it
        it's used in different domains (e.g. web development, data engineering,
        systems programming, etc.)
      </Bullet>
    </BulletContainer>
    <RoadMapP>These are some of my goals for the next 3 months:</RoadMapP>
    <BulletContainer>
      <Bullet>
        Learn more about <Keywords mode={mode}>Amazon Web Services</Keywords>{" "}
        ecosystem and apply my learnings to my data engineering projects
      </Bullet>
      <Bullet>
        Learn more about <Keywords mode={mode}>Rust</Keywords> and how it can be
        used in different domains (e.g. web development, data engineering, etc.)
      </Bullet>
    </BulletContainer>
    <RoadMapP>
      Last update was <b>December 14, 2023</b>.
    </RoadMapP>
  </RoadMapBase>
);

export default RoadMap;
