import styled from "styled-components";
import { Difficulty } from "../Difficulty/Difficulty";

const RecipeItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const RecipeImg = styled.img`
  border-radius: 10px;
  overflow: hidden;
  width: 350px;
`;
const RecipeTitle = styled.h2`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const RecipeInfo = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const RecipeInfoItem = styled.li`
display: flex;
align-center;`;

export const Recipe = ({ recipe }) => {
  return (
    <RecipeItem>
      <RecipeImg src={recipe.img} alt="photo recipe" />
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <RecipeInfo>
        <RecipeInfoItem>{recipe.cookingTime} min</RecipeInfoItem>
        <RecipeInfoItem>{recipe.servings} servings</RecipeInfoItem>
        <RecipeInfoItem>{recipe.calories} calories</RecipeInfoItem>
      </RecipeInfo>
      <Difficulty difficulty={recipe.difficulty} />
    </RecipeItem>
  );
};
