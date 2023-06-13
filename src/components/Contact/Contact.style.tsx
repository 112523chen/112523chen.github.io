import styled from "styled-components";
import { LightState } from "../model";
import { getAccentColor } from "../../functions/helper";

interface Props {
  mode?: LightState;
}

export const ContactBase = styled.div`
  min-width: 21rem;
  padding: 0 20%;
  margin-block-end: 30rem;
  @media only screen and (max-width: 24rem) {
    padding: 0 min(5rem, 1rem);
  }
`;

export const ContactParaph = styled.p``;

export const EmailLink = styled.a<Props>`
  text-decoration: none;
  font-weight: 600;
  color: ${(props) => getAccentColor(props)};
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }
`;
