import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      primary: string;
      secondary: string;
    };
    color: {
      lightMode: {
        primary: string;
        secondary: string;
        accent: string;
        hover: string;
        active: string;
        props: {
          backgroundColor: string;
          baxShadowColor: string;
        };
      };
      darkMode: {
        primary: string;
        secondary: string;
        accent: string;
        hover: string;
        active: string;
        props: {
          backgroundColor: string;
          baxShadowColor: string;
        };
      };
    };
  }
}
