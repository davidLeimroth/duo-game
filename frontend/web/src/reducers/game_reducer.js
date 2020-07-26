import { AddGame } from "../types/game_types";
import { STATE_IDLE } from "../states/network";

const initialState = {
  games: {},
  state: STATE_IDLE,
}

export function gameReducer(state = initialState, action = {}) {
  let newState = {
    ...initialState,
    games: {...initialState.games}
  };
  switch (action.type) {
    case AddGame:
      newState.games[action.payload.id] = action.payload.game;
      return newState;  
    default:
      return state;
  }
}