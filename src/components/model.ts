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
