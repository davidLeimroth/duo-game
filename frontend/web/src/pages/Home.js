import React from "react";
import { StyledNav } from "../models/nav";
import styled from "styled-components";
import { StyledGameList } from "../models/game_list";
import { StyledGameDetail } from "../models/game_detail";
import { primaryBackgroundColour, primaryColour, textColour } from "../colours";
import { OverlayButton, RoundCloseButton, StyledButton } from "../models/button";
import { StyledStartGame } from "../models/start_game";
import { StyledJoinGame } from "../models/join_game";

export const Home = props => {
  // {props => <div className="start-new-game-button" onClick={props.toggle}>+asdfkasdfkjasdkjfjds dsf sd f sdf sdf sd </div>}
  return <div className={props.className}>
    <StyledNav />
    <div className="elem">
      <StyledGameList games={Array(28).fill(null).map((elem, i) => i+1)} />
      <StyledGameDetail />
      <OverlayButton>
        {props => <StyledButton className="start-new-game-pos" onClick={props.toggle}>+</StyledButton>}

        {props => <div className="start-new-game-content" >
          <StyledStartGame />

          <RoundCloseButton onClick={props.toggle}>X</RoundCloseButton>
        </div>}
      </OverlayButton>
    </div>
  </div>
};

export const StyledHome = styled(Home)`
  display: flex;
  flex-direction: column;
  height: 100vh;

  color: ${textColour};
  background-color: ${primaryBackgroundColour};
  

  .elem {
    margin: 1rem;
    display: flex;
    flex-direction: row;

    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
  }

  .start-new-game-pos {
    position: fixed;

    top: 95vh;
    left: 32vw;
    transform: translate(-50%, -50%);
  }

  .start-new-game-content {
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-items: flex-start;
  }
`;