import React from "react";
import { StyledInput } from "./input";
import styled from "styled-components";
import { StyledButton } from "./button";

export const JoinGame = props => {
  return <div className={props.className}>
    <span className="start-new-game-content-start-game">
      <p>Password</p>
      <StyledInput />
      <br />
      <StyledButton className="start-new-game-content-start-button">Join</StyledButton>
    </span>
  </div>;
};

export const StyledJoinGame = styled(JoinGame)`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  justify-content: center;
  align-self: center;
  margin: 1rem;

  .start-new-game-content-start-game {
    display: flex;
    width: 80%;
    flex-direction: column;
    border: 1px solid white;
    justify-content: center;
    align-items: center;
  }
`;