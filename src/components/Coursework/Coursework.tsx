import React from "react";
import { getClass } from "../../helpers/functions";
import { CS_Coursework, DS_Coursework } from "../../assets/data/courswork.json";

interface Props {
  mode: string;
}

const Coursework: React.FC<Props> = ({ mode }) => {
  return (
    <>
      <div id="coursework">
        <div className="headings">
          <h2>Relevant Coursework</h2>
          <hr />
        </div>
        <div id="course">
          <div id="cs-course">
            <h3 className={getClass(mode, "course-head")}>Computer Science</h3>
            {CS_Coursework.map((course, index) => (
              <p className="class" key={index}>
                {course}
              </p>
            ))}
            {/* <p className="class">Introduction to NoSQL Technologies</p> */}
          </div>
          <div id="ds-course">
            <h3 className={getClass(mode, "course-head")}>Data Science</h3>
            {DS_Coursework.map((course, index) => (
              <p className="class" key={index}>
                {course}
              </p>
            ))}
            {/* <p className="class">Machine Learning Fundamentals</p> */}
            {/* <p className="class">Data Visualization</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Coursework;
