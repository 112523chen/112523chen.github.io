import styled from "styled-components";
import { LightState } from "../model";
import { getAccentColor } from "../../functions/helper";

interface RoleModeProps {
  mode: LightState;
}

export const RoleBase = styled.div`
  padding-block-end: 5rem;
`;

export const RoleTitle = styled.div`
  font-weight: bolder;
  font-style: italic;
  font-size: 1.2rem;
`;

export const RoleH3 = styled.h3``;

export const RoleDetails = styled.div`
  max-width: 80%;
`;

export const Rolep = styled.p``;

export const RoleSkills = styled.div`
  margin-bottom: 1.5rem;
`;

export const RoleUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style-type: none;
`;

export const RoleLI = styled.li<RoleModeProps>`
  margin-right: 1rem;
  border: 1px solid ${(props) => getAccentColor(props)};
  border-radius: 3px;
  color: ${(props) => getAccentColor(props)};
  font-size: 0.8rem;
  padding: 3px 7px 1px 7px;
  box-shadow: inset 0 0 0 0 ${(props) => getAccentColor(props)};
  transition: color 0.2s linear, box-shadow 0.5s linear;
  -webkit-margin-after: 0.5rem;
  margin-block-end: 0.5rem;
  &:hover {
    box-shadow: inset 200px 0 0 0 ${(props) => getAccentColor(props)};
    color: #fff;
  }
`;
