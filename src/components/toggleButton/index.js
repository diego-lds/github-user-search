import DarkIcon from "../../assets/moon.svg";
import SunIcon from "../../assets/sun.svg";

import { Button } from "./styles.js";

const ToggleButton = ({ onClick, theme }) => {
  const themeIcon = theme === "dark" ? DarkIcon : SunIcon;

  return (
    <>
      <Button onClick={onClick}>
        <span>{theme}</span>
        <img src={themeIcon} />
      </Button>
    </>
  );
};

export { ToggleButton };
