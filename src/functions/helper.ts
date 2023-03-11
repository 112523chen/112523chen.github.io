export const getLinkTitle = (isRepo: boolean, isWebApp: boolean): string => {
  if (isRepo) {
    return "Project Github Repo";
  } else if (!isRepo && isWebApp) {
    return "Project Web App";
  } else if (!isRepo && !isWebApp) {
    return "Project Web Page";
  }
  return "";
};

export const getLinkText = (isRepo: boolean, isWebApp: boolean): string => {
  if (isRepo) {
    return "Github Repo";
  } else if (!isRepo && isWebApp) {
    return "Web App";
  } else if (!isRepo && !isWebApp) {
    return "Web Page";
  }
  return "";
};
