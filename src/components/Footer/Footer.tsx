import React from "react";

interface Props {
  mode: string;
}

const Footer: React.FC<Props> = ({ mode }) => {
  return (
    <>
      <footer>
        <div id="s"></div>
        <div id="o">
          <p>Design & Built by Alex Chen</p>
        </div>
        <div id="l">
          <ul>
            <li>
              <a
                target="_blank"
                className={mode === "light" ? "links" : "links dark-mode"}
                href="mailto:itsalexchen@gmail.com"
              >
                Email
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className={mode === "light" ? "links" : "links dark-mode"}
                href="https://github.com/112523chen"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className={mode === "light" ? "links" : "links dark-mode"}
                href="https://www.linkedin.com/in/alex-chen-112523chen/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className={mode === "light" ? "links" : "links dark-mode"}
                href="../../../src/assets/docs/AlexChenResume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
