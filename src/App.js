import Header from "./components/header";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { StyledApp, Container } from "./styled.js";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Container>
          <Header
            toggleTheme={toggleTheme}
            changeTheme={theme === "light" ? "dark" : "light"}
          />
        </Container>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
