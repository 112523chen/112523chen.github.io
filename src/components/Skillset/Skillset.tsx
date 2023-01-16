import React from "react";

type Props = {
  mode: string;
};

const Skillset: React.FC<Props> = ({ mode }) => {
  return (
    <>
      <div id="skills">
        <div className="headings">
          <h2>Skills</h2>
          <hr />
        </div>
        <div id="frame">
          <div className="skillset" id="programming">
            <p>
              <span
                className={
                  mode === "light" ? "highlight" : "highlight dark-mode"
                }
              >
                Languages:
              </span>{" "}
              Python, SQL, HTML, CSS, JavaScript, TypeScript, Java, Sass, Bash,
              R
            </p>
          </div>
          <div className="skillset" id="libary">
            <p id="libary">
              <span
                className={
                  mode === "light" ? "highlight" : "highlight dark-mode"
                }
              >
                Libraries:
              </span>{" "}
              Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, NLTK, Redux,
              SciPy
            </p>
          </div>
          <div className="skillset" id="framework">
            <p>
              <span
                className={
                  mode === "light" ? "highlight" : "highlight dark-mode"
                }
              >
                Frameworks:
              </span>{" "}
              Streamlit, React, Bootstrap, Node, Mocha, Jest, Express
            </p>
          </div>
          <div className="skillset" id="tools">
            <p>
              <span
                className={
                  mode === "light" ? "highlight" : "highlight dark-mode"
                }
              >
                Tools:
              </span>{" "}
              Git, GitHub, Jupyter Notebooks, Excel, Data Studio, Tableau, Figma
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skillset;
