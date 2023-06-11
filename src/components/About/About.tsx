import React from "react";
import { LightState } from "../model";
import Heading from "../Heading/Heading";
import { AboutBase, AboutBio, AboutP } from "./About.style";

interface Props {
  mode: LightState;
  className?: string;
}

const About: React.FC<Props> = ({ mode, className }) => {
  return (
    <AboutBase
      id="about-section"
      className="section"
      data-testid="aboutSection"
    >
      <Heading>About Me</Heading>
      <AboutBio id="aboutBio">
        <AboutP>
          I am a third-year data science student at New York City College of
          Technology, CUNY and CUNY Tech Prep Alumni with real-world experience
          in data analysis, quality assurance, and data engineering. Within
          these experiences, I have worked to connect people with data in
          investigator and engineer roles. I am passionate about learning more
          about this world through different lenses especially through data.
        </AboutP>
        <AboutP mode={mode} className="highlight" data-testid="highlightedText">
          My goal is to discover, analyze and harness — the power of 'data'.
          Data is undoubtedly the new gold of the era we live in.
        </AboutP>
        <AboutP>
          When I am not in front of a screen, I’m most likely enjoying the local
          food and wonderful weather while reading or listening to music.
        </AboutP>
      </AboutBio>
    </AboutBase>
  );
};

export default About;
