import React from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import { StyledButton } from "./button";
import { random } from "../util/string";

export const StartGame = props => {
  return <div className={props.className}>
    <span className="start-new-game-content-start-game">
      <p>Start a new game</p>
      <br />
      <StyledButton onClick={e => navigate(`/game/${random(32)}`)} className="start-new-game-content-start-button">Start</StyledButton>
    </span>
  </div>;
};

export const StyledStartGame = styled(StartGame)`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  justify-content: center;
  align-self: center;
  margin: 1rem;
  height: 80%;

  .start-new-game-content-start-game {
    display: flex;
    width: 80%;
    flex-direction: column;
    border: 1px solid white;
    justify-content: center;
    align-items: center;
  }
`;