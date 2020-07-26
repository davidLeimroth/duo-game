import { combineReducers } from "redux";
import { gameReducer } from "./game_reducer";

export const rootReducer = combineReducers({gameReducer});