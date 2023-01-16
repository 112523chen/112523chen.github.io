import React from "react";
import { getClass } from "../../helpers/functions";

type Props = {
  mode: string;
};

const About: React.FC<Props> = ({ mode }) => {
  return (
    <>
      <div id="about">
        <div className="headings">
          <h2>About Me</h2>
          <hr />
        </div>
        <div id="bio">
          <p>
            I am a third-year student at New York City College of Technology,
            CUNY and majoring in data science and interned at 2 companies in
            backend development and data analysis roles. I also am part of the
            8th cohort of CUNY Tech Prep as a fellow and also an ambassador for
            CTP. I am passionate about learning more about this world through
            different lenses especially through data.
          </p>
          <p className={getClass(mode, "highlight")}>
            My goal is to discover, analyze and harness — the power of 'data'.
            Data is undoubtedly the new gold of the era we live in.
          </p>
          <p>
            When I am not in front of a screen, I’m most likely enjoying the
            local food and wonderful weather while reading or listening to
            music.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
