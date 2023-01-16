export interface ProjectType {
  id: number;
  title: string;
  details: string;
  skills: string[];
  isRepo: boolean;
  isWebApp: boolean;
  link: string;
}

export const getClass = (state: string, normalClass: string): string => {
  return state === "light" ? normalClass : normalClass + " dark-mode";
};
