import React from "react";
import styled from "styled-components";

import { boxShadow, primaryColour, cardA, boxShadowBig, secondaryBackgroundColour, textColour, primaryBackgroundColour } from "../colours";

export const GameList = props => {
  return <div className={props.className}>
    {
      props.games?
      props.games.map(g => <div className="game-list-elem">Game {g}</div>)
      :<></>
    }
  </div>;
};

export const StyledGameList = styled(GameList)`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;

  height: 100vmin;
  flex-grow: 1;
  overflow-y: auto;
  max-height: 90vh;

  .game-list-elem {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: .5rem;
    margin-bottom: .5rem;
    color: #ffffff;
    border-radius: .5rem;
    width: 90%;
    height: 3rem;
    min-height: 3em;
    background-color: ${primaryBackgroundColour}; /* rgba(30, 43, 71, .5); */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${boxShadow};
    :hover {
      box-shadow: ${boxShadowBig}
    }
  }
`;
