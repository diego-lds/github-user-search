import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F6F8FF",
  color: "#697C9A",
  inputBackgroundColor: "#fefefe",
  inputFontColor: "red",
  inputBoxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
};

export const darkTheme = {
  body: "#141D2F",
  color: "white",
  inputBackgroundColor: "#1E2A47",
  inputFontColor: "white",
  inputBoxShadow: "none",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }

  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 
`;
