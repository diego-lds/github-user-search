import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  display: flex;
  padding: 9.5px 10px 9.5px 32px;
  background: ${(props) => props.theme.inputBackgroundColor};
  box-shadow: ${(props) => props.theme.inputBoxShadow};
  border-radius: 15px;
  margin-top: 30px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-family: "Space Mono";
  font-size: 15px;
  font-weight: bold;
  width: 200px;
  margin-right: 24px;
  color: var(--red);
`;

const Input = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  color: ${(props) => props.theme.inputFontColor};
  width: 100%;
  font-family: Space Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  padding-left: 20px;
`;

export { Container, Input, Label };
