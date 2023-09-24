import React from "react";
import {
  ContactBase,
  ContactParaph,
  EmailLink,
  LinkedInLink,
} from "./Contact.style";
import Heading from "../Heading/Heading";
import { LightState } from "../model";

interface Props {
  mode: LightState;
}

const Contact: React.FC<Props> = ({ mode }) => {
  return (
    <ContactBase id="contact-section" className="section">
      <Heading>Contact Me</Heading>
      <div>
        <ContactParaph>Want to get in touch?</ContactParaph>
        <ContactParaph>
          The best way to contact me is via{" "}
          <EmailLink mode={mode} href="mailto:itsalexchen@gmail.com">
            email
          </EmailLink>{" "}
          but you can also connect with me on{" "}
          <LinkedInLink
            mode={mode}
            target="_blank"
            href="https://www.linkedin.com/in/alex-chen-2407251b4/"
          >
            {" "}
            LinkedIn
          </LinkedInLink>
        </ContactParaph>
      </div>
    </ContactBase>
  );
};

export default Contact;
