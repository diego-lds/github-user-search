import styled from "styled-components";

const Card = styled.div`
  height: 400px;
  max-width: 100%;
  background-color: var(--pale-white);
  margin-top: 24px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  padding: 48px;
  display: flex;
`;

const LeftPanel = styled.div`
  width: 117px;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const RightPanel = styled.div`
  width: 100%;
  padding-left: 37px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
`;
const HeaderLeft = styled.div`
  font-family: Space Mono;
  width: 50%;
  span {
    margin: 0;
    color: var(--dark-gray);
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 39px;
  }
  h2 {
    color: var(--blue);
    font-size: 16px;
    line-height: 24px;
  }
`;

const HeaderRight = styled.div`
  width: 50%;
  text-align: right;
  span {
    color: var(--gray);
    font-family: Space Mono;
    font-size: 15px;
    line-height: 22px;
  }
`;

const Bio = styled.div`
  margin-top: 20px;
  span {
    color: var(--blueish-gray);
    font-family: Space Mono;
    font-size: 15px;
    line-height: 25px;
    mix-blend-mode: normal;
    opacity: 0.75;
  }
`;
const InfoBox = styled.div`
  color: black;
  background: var(--light-gray);
  margin-top: 32px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Box = styled.div`
  display: grid;
  padding: 15px 0 15px 32px;

  span:first-child {
    font-family: Space Mono;
    color: var(--blueish-gray);
    font-size: 13px;
    line-height: 19px;
  }

  span:last-child {
    font-family: Space Mono;
    color: var(--dark-gray);
    font-weight: bold;
    font-size: 22px;
    line-height: 33px;
  }
`;

const InfoFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 35px;
  div {
    display: flex;
    align-items: center;
    font-family: Space Mono;
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 20px;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
`;

const Row = styled.div`
  background-color: tomato;
`;

export {
  Card,
  LeftPanel,
  RightPanel,
  Header,
  HeaderLeft,
  HeaderRight,
  Bio,
  InfoBox,
  Box,
  InfoFooter,
  Row,
};
