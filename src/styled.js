import styled from "styled-components";

const StyledApp = styled.div`
  color: ${(props) => props.theme.color};
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 730px;
  padding-top: 144px;
`;

export { StyledApp, Container };
