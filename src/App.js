import "./App.scss";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import styled from "styled-components";

const StyledApp = styled.div`
  color: ${(props) => props.theme.color};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    theme === "light" ? setTheme("light") : setTheme("dark");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <p>App Theme</p>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
