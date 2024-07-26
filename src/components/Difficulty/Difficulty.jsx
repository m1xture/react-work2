import styled from "styled-components";

const DifficultyBlock = styled.div`
  border-radius: 10px;
  margin-top: 15px;
  background-color: #eee;
`;

const DifficultyList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 10px;
  gap: 10px;
`;

const DifficultyItem = styled.li`
  bacground-color: teal;
  padding: 5px;
  color: #333;
`;

const DifficultyItemActive = styled.li`
  background-color: coral;
  border-radius: 10px;
  padding: 5px;
  color: #eee;
`;

export const Difficulty = ({ difficulty }) => {
  return (
    <DifficultyBlock>
      <DifficultyList>
        {difficulty === 0 ? (
          <DifficultyItemActive>Easy</DifficultyItemActive>
        ) : (
          <DifficultyItem>Easy</DifficultyItem>
        )}
        {difficulty === 1 ? (
          <DifficultyItemActive>Medium</DifficultyItemActive>
        ) : (
          <DifficultyItem>Medium</DifficultyItem>
        )}
        {difficulty === 2 ? (
          <DifficultyItemActive>Hard</DifficultyItemActive>
        ) : (
          <DifficultyItem>Hard</DifficultyItem>
        )}
      </DifficultyList>
    </DifficultyBlock>
  );
};
