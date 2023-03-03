import React from "react";
import { HeadingBase, HeadingH2, HeadingHr } from "./Heading.style";

interface Props {
  children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ children }) => {
  return (
    <HeadingBase>
      <HeadingH2>{children}</HeadingH2>
      <HeadingHr />
    </HeadingBase>
  );
};

export default Heading;
