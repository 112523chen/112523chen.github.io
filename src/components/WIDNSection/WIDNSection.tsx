import React from "react";
import {
  Bullet,
  BulletContainer,
  Keywords,
  WIDNBase,
  WIDNP,
} from "./WIDNSection.style";
import Heading from "../Heading/Heading";
import { LightState } from "../model";

interface Props {
  mode: LightState;
}

const WIDNSection: React.FC<Props> = ({ mode }) => (
  <WIDNBase>
    <Heading>What I'm Doing Now</Heading>
    <WIDNP>
      I'm trying dive deeper into{" "}
      <Keywords mode={mode}>software development</Keywords> specifically
      targeting <Keywords mode={mode}>cloud service</Keywords> and{" "}
      <Keywords mode={mode}>data engineering</Keywords>.
    </WIDNP>
    <WIDNP>This is what I spend my time doing:</WIDNP>
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
    <WIDNP>These are some of my goals for the next 3 months:</WIDNP>
    <BulletContainer>
      <Bullet>
        Learn more about <Keywords mode={mode}>Google Cloud Provider</Keywords>{" "}
        ecosystem and apply my learnings to my data engineering projects
      </Bullet>
      <Bullet>
        Develop my soft-skills and collaborate more with engineers for my
        volunteer and internship experience this summer
      </Bullet>
    </BulletContainer>
    <WIDNP>
      Last update was <b>June 10, 2023</b>.
    </WIDNP>
  </WIDNBase>
);

export default WIDNSection;
