import React from "react";
import { LightState, RoleType } from "../model";
import {
  RoleBase,
  RoleDetails,
  RoleH3,
  RoleLI,
  RoleSkills,
  RoleTitle,
  RoleUL,
  Rolep,
} from "./Role.style";

interface Props {
  roleData: RoleType;
  mode: LightState;
}

const Role: React.FC<Props> = ({ roleData, mode }) => {
  return (
    <RoleBase>
      <RoleTitle>
        <RoleH3>
          {roleData.title} @ {roleData.employer}
        </RoleH3>
      </RoleTitle>
      <RoleDetails>
        <Rolep>
          {roleData.start} - {roleData.end}
        </Rolep>
        <Rolep>{roleData.summary}</Rolep>
      </RoleDetails>
      <RoleSkills>
        <RoleUL>
          {roleData.skills.map((skill, index) => (
            <RoleLI mode={mode} key={index}>
              {skill}
            </RoleLI>
          ))}
        </RoleUL>
      </RoleSkills>
    </RoleBase>
  );
};

export default Role;
