import styled from "styled-components";

const StyledApp = styled.div`
  color: ${(props) => props.theme.color};
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  width: 730px;
  padding-top: 50px;
`;

export { StyledApp, Container };
