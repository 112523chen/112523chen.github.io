import React from "react";
import { LightState } from "../model";
import { linkData } from "../../assets/data/linkData.json";
import {
  FooterBase,
  Left,
  Middle,
  P,
  Right,
  UL,
  LI,
  Link,
} from "./Footer.style";

interface Props {
  mode: LightState;
}

const Footer: React.FC<Props> = ({ mode }) => {
  return (
    <FooterBase>
      <Left></Left>
      <Middle>
        <P>Design & Built by Alex Chen</P>
      </Middle>
      <Right>
        <UL>
          {linkData.map((link) => (
            <LI key={link.id}>
              <Link target="_blank" href={link.link} mode={mode}>
                {link.id}
              </Link>
            </LI>
          ))}
        </UL>
      </Right>
    </FooterBase>
  );
};

export default Footer;
