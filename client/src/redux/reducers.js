import { CLEAR_STATE, GAME_BY_NAME, GET_GAMES } from "./actions";

const initialState = {
  games: [],
  allGames: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        games: [...state.games, ...payload],
        allGames: [...state.allGames, ...payload],
      };

    case CLEAR_STATE:
      return {
        ...state,
        games: [],
        allGames: [],
      };

    case GAME_BY_NAME:
      return {
        ...state,
        games: [...payload],
        allGames: [...payload],
      };

    default:
      return { ...state };
  }
}

export default reducer;
