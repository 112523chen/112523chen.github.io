import React from "react";

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
            <h3
              className={
                mode === "light" ? "course-head" : "course-head dark-mode"
              }
            >
              Computer Science
            </h3>
            <p className="class">Data Structures</p>
            {/* <p className="class">Introduction to NoSQL Technologies</p> */}
            <p className="class">Object Oriented Programming in Java</p>
            <p className="class">Web Programming</p>
            <p className="class">Programming Fundamentals</p>
            <p className="class">Discrete Structures and Algorithms</p>
          </div>
          <div id="ds-course">
            <h3
              className={
                mode === "light" ? "course-head" : "course-head dark-mode"
              }
            >
              Data Science
            </h3>
            <p className="class">Introduction to Artificial Intelligence</p>
            <p className="class">Machine Learning for Physics and Astronomy</p>
            {/* <p className="class">Machine Learning Fundamentals</p> */}
            {/* <p className="class">Data Visualization</p> */}
            <p className="class">Information and Data Management</p>
            <p className="class">Introduction to Data Science</p>
            <p className="class">Database Systems Fundamentals</p>
            <p className="class">Introduction to Linear Algebra</p>
            <p className="class">Probability and Mathematical Statistics</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coursework;
