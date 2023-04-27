//* Definition of a project object
export interface ProjectType {
  id: number;
  title: string;
  details: string;
  skills: string[];
  isRepo: boolean;
  isWebApp: boolean;
  link: string;
}

//* Definition of a theme state
export type LightState = "light" | "dark";

//* Definition of a role object
export interface RoleType {
  id: number;
  title: string;
  employer: string;
  start: string;
  end: string;
  skills: string[];
  summary: string;
}
