import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const HeadingBase = styled.div``;

const HeadingH2 = styled.h2`
  font-size: 3rem;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 24rem) {
    font-size: 2rem;
  }
`;

const HeadingHr = styled.hr`
  margin: 0;
  margin-right: 20%;
`;

const Heading: React.FC<Props> = ({ children }) => {
  return (
    <HeadingBase>
      <HeadingH2>{children}</HeadingH2>
      <HeadingHr />
    </HeadingBase>
  );
};

export default Heading;
