import styled from "styled-components";

const Button = styled.button`
  height: 50px;
  color: var(--white);
  border: none;
  font-family: "Space Mono";
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;
  background-color: var(--blue);
  padding: 12.5px 24px 13.5px 24px;

  :hover {
    background-color: var(--light-blue);
  }
`;

export { Button };
