import { Button as StyledButton } from "./styled";

const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export { Button };
