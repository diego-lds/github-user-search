import styled from "styled-components";

const StyledButton = styled.button`
  width: 90px;
  border: solid red thin;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;

  span {
    margin-right: 16px;
    font-family: "Space Mono";
    line-height: 19.25px;
    letter-spacing: 2.5;
  }
`;

export { StyledButton };
