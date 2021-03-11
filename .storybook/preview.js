import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
export const theme1 = {
  borderRadius: "4px",
  fontSource: "https://fonts.googleapis.com/css?family=Poppins:400,600",
  fontFamily: "Poppins, sans-serif",
  palette: {
    common: {
      black: "#222831",
      white: "#fff",
    },
    primary: {
      main: "#19456b",
      contrastText: "#ffffff",
    },
    success: {
      main: "#27aa80",
      contrastText: "#ffffff",
    },
    danger: {
      main: "#ef4f4f",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#f77f00",
      contrastText: "#ffffff",
    },
  },
};

const theme2 = {}

const themes = [theme1, theme2];
addDecorator(withThemesProvider(themes));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}