import React from "react";
import { getClass } from "../../helpers/functions";

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
                className={getClass(mode, "links")}
                href="mailto:itsalexchen@gmail.com"
              >
                Email
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className={getClass(mode, "links")}
                href="https://github.com/112523chen"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className={getClass(mode, "links")}
                href="https://www.linkedin.com/in/alex-chen-112523chen/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className={getClass(mode, "links")}
                href="/AlexChenResume.pdf"
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
