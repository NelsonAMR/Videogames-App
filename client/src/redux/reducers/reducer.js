import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import appReducer from "./appReducer";

const reducer = combineReducers({
  games: gamesReducer,
  app: appReducer,
});

export default reducer;
