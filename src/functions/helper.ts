import { LightState } from "../components/model";

// App Component Helper Functions

// * Gets user's device size
export const checkForMobileDevice = (): boolean => {
  const regexp = /android|iphone|kindle|ipad/i;
  return regexp.test(navigator.userAgent);
};

// * Gets user's theme preference
export const getUserPreferredTheme = (): LightState => {
  return window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";
};

// Navgation Component Helper Functions

//* Helper function to check if viewport is at bottom of page
export const isBottomOfPage = (): boolean => {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
};

// Project Component Helper Functions

//* Helper function to get hover text for the links for each project
export const getLinkTitle = (isRepo: boolean, isWebApp: boolean): string => {
  if (isRepo) {
    return "Project Github Repo";
  } else if (!isRepo && isWebApp) {
    return "Project Web App";
  } else {
    return "Project Web Page";
  }
};

//* Helper function to get text for the links for each project
export const getLinkText = (isRepo: boolean, isWebApp: boolean): string => {
  if (isRepo) {
    return "Github Repo";
  } else if (!isRepo && isWebApp) {
    return "Web App";
  } else {
    return "Web Page";
  }
};

// Style Helper Functions

//* get accent color
export const getAccentColor = (props: any): string => {
  return props.mode === "light"
    ? props.theme.color.lightMode.accent
    : props.theme.color.darkMode.accent;
};

//* get hover color
export const getHoverColor = (props: any): string => {
  return props.mode === "light"
    ? props.theme.color.lightMode.hover
    : props.theme.color.darkMode.hover;
};

//* get active color
export const getActiveColor = (props: any): string => {
  return props.mode === "light"
    ? props.theme.color.lightMode.active
    : props.theme.color.darkMode.active;
};
