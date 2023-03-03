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
    <AboutBase id="aboutSection" data-testid="aboutSection">
      <Heading>About Me</Heading>
      <AboutBio id="aboutBio">
        <AboutP>
          I am a third-year data science student at New York City College of
          Technology, CUNY and I have interned at 2 companies with the aim of
          effectively managing data and creating visualizations from data to
          support data-driven decisions and each company's mission I also am
          part of the 8th cohort of CUNY Tech Prep as a fellow and also an
          ambassador for CTP. I am passionate about learning more about this
          world through different lenses especially through data.
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
