import React from "react";
import { useEffect, useState } from "react";
import { phrases } from "../../assets/data/phrases.json";
import { Typewriter } from "react-simple-typewriter";

interface Props {
  mode: string;
}

const Display: React.FC<Props> = ({ mode }) => {
  return (
    <>
      <div id="display">
        <h1>Alex Chen</h1>
        <div id="headline">
          <div
            className={
              mode === "light"
                ? "typewriter-container"
                : "typewriter-container dark-mode"
            }
          >
            <Typewriter words={phrases} loop={0} cursor={true} />
          </div>
          <p hidden id="mobile-head">
            Aspiring Data Scientist | Data Science Fellow @ CUNY Tech Prep
          </p>
        </div>
        <div id="story">
          <p>
            I am a{" "}
            <span
              className={mode === "light" ? "highlight" : "highlight dark-mode"}
            >
              data science
            </span>{" "}
            student studying at
            <span
              className={mode === "light" ? "highlight" : "highlight dark-mode"}
            >
              New York City College of Technology
            </span>
            while also studying
            <span
              className={mode === "light" ? "highlight" : "highlight dark-mode"}
            >
              web development
            </span>{" "}
            in my free time who is eager to tell stories from data.
          </p>
        </div>
      </div>
    </>
  );
};

export default Display;
