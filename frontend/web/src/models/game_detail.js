import React from "react";
import styled from "styled-components";

import { boxShadow } from "../colours";

export const GameDetail = props => (
  <div className={props.className}>
    <div className="game-detail-content">

    </div>
    <p>Detail</p>
  </div>
)

export const StyledGameDetail = styled(GameDetail)`
  display: flex;
  flex-grow: 2;

  background-color: #000000;
  color: #ffffff;
  border-radius: .5rem;
  box-shadow: ${boxShadow};

  .game-detail-content {
    margin: 1rem;
  }
`;