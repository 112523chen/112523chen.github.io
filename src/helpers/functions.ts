export const getClass = (state: string, normalClass: string): string => {
  return state === "light" ? normalClass : normalClass + " dark-mode";
};
