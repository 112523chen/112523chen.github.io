import styled from "styled-components";
import { LightState } from "../model";
import { getAccentColor } from "../../functions/helper";

interface DisplayModeProps {
  mode: LightState;
}

export const WIDNBase = styled.div`
  min-width: 21rem;
  padding: 0 20%;
  margin-block-end: 15rem;
  @media only screen and (max-width: 24rem) {
    padding: 0 min(5rem, 1rem);
  }
`;

export const WIDNP = styled.p`
  line-height: 2;
  max-width: 80%;
`;

export const BulletContainer = styled.ul``;

export const Bullet = styled.li``;

export const Keywords = styled.span<DisplayModeProps>`
  color: ${(props) => getAccentColor(props)};
`;
