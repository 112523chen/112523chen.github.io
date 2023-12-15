import styled from "styled-components";

export const ProfessionalBase = styled.div`
  min-width: 21rem;
  padding: 0 20%;
  -webkit-margin-after: 15rem;
  margin-block-end: 15rem;
  @media only screen and (max-width: 24rem) {
    padding: 0 min(5rem, 1rem);
    margin-block-start: 10rem;
    margin-block-end: 3rem;
  }
`;

export const Frame = styled.div`
  width: 85%;
`;
