import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F6F8FF",
  color: "black",
};

export const darkTheme = {
  body: "#141D2F",
  color: "white",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }
`;
