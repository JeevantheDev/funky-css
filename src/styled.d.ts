import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    fontSource: string;
    fontFamily: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      success: IPalette;
      danger: IPalette;
      warning: IPalette;
    };
  }
}
