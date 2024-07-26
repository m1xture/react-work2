import styled from "styled-components";
import { Recipe } from "./components/Recipe/Recipe";
import data from "./data.json";

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;
function App() {
  return (
    <List>
      {data.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </List>
  );
}

export default App;
