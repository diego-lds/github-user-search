import { Container, Input, Label } from "./styled.js";
import SearchIcon from "../../assets/search.svg";
import { Button } from "../button";

const SearchUserInput = ({ onClick }) => {
  return (
    <Container>
      <img src={SearchIcon} />
      <Input placeholder="Search Github usename..." />
      <Label>No results</Label>
      <Button onClick={onClick} text="Search" />
    </Container>
  );
};

export { SearchUserInput };
