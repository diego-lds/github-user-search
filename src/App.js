import { Header, SearchUserInput, InfoCard } from "./components";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { StyledApp, Container } from "./styled.js";

const mock = {
  name: "diegolopes087",
  at: "@diegolopes",
  joinDate: "25 Set 2012",
  bio: "Bio of diegolopes",
  reposNo: 8,
  followers: 396,
  following: 130,
  location: "Florianópolis",
  twitterUrl: "@diegolopes",
  blog: "https://github.blog",
  github: "@github",
  photoUrl:
    "https://media-exp1.licdn.com/dms/image/C4E03AQGXDFXFlYfDrA/profile-displayphoto-shrink_200_200/0/1625365345722?e=1636588800&v=beta&t=mUEJA6U8Wu8LStnHFGVg2y5sKtRuNE8MJHaEg40TK7M",
};

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
          <SearchUserInput
            onClick={() => console.log("Search button cicked")}
          />
          <InfoCard data={mock} />
        </Container>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
