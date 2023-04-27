import {
  getAccentColor,
  getActiveColor,
  getHoverColor,
  getLinkText,
  getLinkTitle,
} from "./helper";

describe("Link Hover Tests", () => {
  test("Create a link with a repo that isn't a web app", () => {
    let isRepo: boolean = true;
    let isWebApp: boolean = false;

    let title: string = "Project Github Repo";

    expect(getLinkTitle(isRepo, isWebApp)).toEqual(title);
  });

  test("Create a link with a repo that is also a web app", () => {
    let isRepo: boolean = true;
    let isWebApp: boolean = true;

    let title: string = "Project Github Repo";

    expect(getLinkTitle(isRepo, isWebApp)).toEqual(title);
  });

  test("Create a link with web app that isn't a repo", () => {
    let isRepo: boolean = false;
    let isWebApp: boolean = true;

    let title: string = "Project Web App";

    expect(getLinkTitle(isRepo, isWebApp)).toEqual(title);
  });

  test("Create a link that isn't a web app or a repo", () => {
    let isRepo: boolean = false;
    let isWebApp: boolean = false;

    let title: string = "Project Web Page";

    expect(getLinkTitle(isRepo, isWebApp)).toEqual(title);
  });
});

describe("Link Text Tests", () => {
  test("Create a link with a repo that isn't a web app", () => {
    let isRepo: boolean = true;
    let isWebApp: boolean = false;

    let title: string = "Github Repo";

    expect(getLinkTitle(isRepo, isWebApp)).toEqual(title);
  });

  test("Create a link with a repo that is also a web app", () => {
    let isRepo: boolean = true;
    let isWebApp: boolean = true;

    let title: string = "Github Repo";

    expect(getLinkText(isRepo, isWebApp)).toEqual(title);
  });

  test("Create a link with web app that isn't a repo", () => {
    let isRepo: boolean = false;
    let isWebApp: boolean = true;

    let title: string = "Web App";

    expect(getLinkText(isRepo, isWebApp)).toEqual(title);
  });

  test("Create a link that isn't a web app or a repo", () => {
    let isRepo: boolean = false;
    let isWebApp: boolean = false;

    let title: string = "Web Page";

    expect(getLinkText(isRepo, isWebApp)).toEqual(title);
  });
});

describe("Button Accent Color Test", () => {
  let lightProps = {
    mode: "light",
    theme: {
      color: {
        lightMode: {
          hover: "light",
          accent: "light",
          active: "light",
        },
        darkMode: {
          hover: "dark",
          accent: "dark",
          active: "dark",
        },
      },
    },
  };

  let darkProps = {
    mode: "dark",
    theme: {
      color: {
        lightMode: {
          hover: "light",
          accent: "light",
          active: "light",
        },
        darkMode: {
          hover: "dark",
          accent: "dark",
          active: "dark",
        },
      },
    },
  };
  test("Get light accent color from light theme", () => {
    expect(getAccentColor(lightProps)).toEqual("light");
  });

  test("Doesn't get light accent color from dark theme", () => {
    expect(getAccentColor(lightProps)).not.toEqual("dark");
  });

  test("Get dark accent color from dark theme", () => {
    expect(getAccentColor(darkProps)).toEqual("dark");
  });

  test("Don't get dark accent color from light theme", () => {
    expect(getAccentColor(darkProps)).not.toEqual("light");
  });
});

describe("Button Hover Color Test", () => {
  let lightProps = {
    mode: "light",
    theme: {
      color: {
        lightMode: {
          hover: "light",
          accent: "light",
          active: "light",
        },
        darkMode: {
          hover: "dark",
          accent: "dark",
          active: "dark",
        },
      },
    },
  };

  let darkProps = {
    mode: "dark",
    theme: {
      color: {
        lightMode: {
          hover: "light",
          accent: "light",
          active: "light",
        },
        darkMode: {
          hover: "dark",
          accent: "dark",
          active: "dark",
        },
      },
    },
  };
  test("Get light hover color from light theme", () => {
    expect(getHoverColor(lightProps)).toEqual("light");
  });

  test("Doesn't get light hover color from dark theme", () => {
    expect(getHoverColor(lightProps)).not.toEqual("dark");
  });

  test("Get dark hover color from dark theme", () => {
    expect(getHoverColor(darkProps)).toEqual("dark");
  });

  test("Don't get dark hover color from light theme", () => {
    expect(getHoverColor(darkProps)).not.toEqual("light");
  });
});

describe("Button Active Color Test", () => {
  let lightProps = {
    mode: "light",
    theme: {
      color: {
        lightMode: {
          hover: "light",
          accent: "light",
          active: "light",
        },
        darkMode: {
          hover: "dark",
          accent: "dark",
          active: "dark",
        },
      },
    },
  };

  let darkProps = {
    mode: "dark",
    theme: {
      color: {
        lightMode: {
          hover: "light",
          accent: "light",
          active: "light",
        },
        darkMode: {
          hover: "dark",
          accent: "dark",
          active: "dark",
        },
      },
    },
  };
  test("Get light active color from light theme", () => {
    expect(getActiveColor(lightProps)).toEqual("light");
  });

  test("Doesn't get light active color from dark theme", () => {
    expect(getActiveColor(lightProps)).not.toEqual("dark");
  });

  test("Get dark active color from dark theme", () => {
    expect(getActiveColor(darkProps)).toEqual("dark");
  });

  test("Don't get dark active color from light theme", () => {
    expect(getActiveColor(darkProps)).not.toEqual("light");
  });
});
