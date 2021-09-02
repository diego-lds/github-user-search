import ToggleButton from "../toggleButton";
import { StyledHeader } from "./styled.js";

const Header = ({ toggleTheme, changeTheme }) => {
  return (
    <StyledHeader>
      <p>devfinder</p>
      <ToggleButton onClick={toggleTheme} theme={changeTheme} />
    </StyledHeader>
  );
};

export default Header;
