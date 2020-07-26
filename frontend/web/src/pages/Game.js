import React from "react";
import { StyledNav } from "../models/nav";
import styled from "styled-components";
import { primaryBackgroundColour, textColour } from "../colours";
import { StyledUserList } from "../models/user_list";

const randomName = () => {
  const names = ["Leonie", "David", "Valentin", "Jule", "Noel"]
  return names[Math.floor(Math.random() * names.length)];
}

export const Game = props => {
  return <div className={props.className}>
    <StyledNav />
    <div className="game-content">
      <StyledUserList users={Array(5).fill(null).map((u, i) => ({name: randomName(), id: i}))} />
    </div>
  </div>
};

export const StyledGame = styled(Game)`
  background-color: ${primaryBackgroundColour};
  color: ${textColour};

  height: 100vh;

  .game-content {
    margin: 1rem;
  }
`;