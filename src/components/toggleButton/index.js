import DarkIcon from "../../assets/moon.svg";
import SunIcon from "../../assets/sun.svg";
import { StyledButton } from "./styles.js";

const ToggleButton = ({ onClick, theme }) => {
  const themeIcon = theme === "dark" ? DarkIcon : SunIcon;

  return (
    <>
      <StyledButton onClick={onClick}>
        <span>{theme}</span>
        <img src={themeIcon} />
      </StyledButton>
    </>
  );
};

export default ToggleButton;
