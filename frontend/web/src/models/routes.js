import React from "react";
import { Router } from "@reach/router"

import { StyledHome } from "../pages/Home";
import { StyledGame } from "../pages/Game";
import { StyledSettings } from "../pages/Settings";

export const Routes = props => {
  return <Router>
    <StyledHome path="/" />
    <StyledSettings path="/settings" />
    <StyledGame path="/game/:gameId" />
  </Router>;
};