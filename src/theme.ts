import { DefaultTheme } from "styled-components";
export const defaultTheme: DefaultTheme = {
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
