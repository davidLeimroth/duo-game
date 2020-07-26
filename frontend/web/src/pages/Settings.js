import React from "react";
import { StyledNav } from "../models/nav";
import styled from "styled-components";
import { primaryBackgroundColour, textColour, primaryColour, secondaryBackgroundColour } from "../colours";
import { OverlayButton, RoundCloseButton } from "../models/button";

export const Settings = props => {
  return <div className={props.className}>
    <StyledNav />
    <div className="content">
      Settings
      <OverlayButton>
        {props => <div className="overlay-button" onClick={props.toggle}>blub</div>}

        {props => <div className={"overlay-content"} >
          <p>Content</p>
          <p>Content 2</p>
          <p>Content 3</p>
          <RoundCloseButton onClick={props.toggle}>X</RoundCloseButton>
        </div>}
      </OverlayButton>
    </div>
  </div>
};

export const StyledSettings = styled(Settings)`
  background-color: ${primaryBackgroundColour};
  height: 100vh;
  color: ${textColour};

  .content {
    margin: 1rem;
  }

  .overlay-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background-color: ${primaryColour};
  }

  .overlay-content {
    background-color: ${secondaryBackgroundColour};

    padding: 1rem;
  }
`;