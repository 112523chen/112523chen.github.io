import React from "react";
import { phrases } from "../../assets/data/phrases.json";
import { Typewriter } from "react-simple-typewriter";
import { getClass } from "../../helpers/functions";

interface Props {
  mode: string;
}

const Display: React.FC<Props> = ({ mode }) => {
  return (
    <>
      <div id="display">
        <h1>Alex Chen</h1>
        <div id="headline">
          <div className={getClass(mode, "typewriter-container")}>
            <Typewriter words={phrases} loop={0} cursor={true} />
          </div>
          <p hidden id="mobile-head">
            Aspiring Data Scientist | Data Science Fellow @ CUNY Tech Prep
          </p>
        </div>
        <div id="story">
          <p>
            I am a
            <span className={getClass(mode, "highlight")}>data science</span>{" "}
            student studying at
            <span className={getClass(mode, "highlight")}>
              New York City College of Technology
            </span>
            while also studying
            <span className={getClass(mode, "highlight")}>web development</span>
            in my free time who is eager to tell stories from data.
          </p>
        </div>
      </div>
    </>
  );
};

export default Display;
