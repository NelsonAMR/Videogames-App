import {
  CLEAR_STATE,
  GAME_BY_NAME,
  GAME_DETAIL,
  GET_GAMES,
  ORDER_GAMES,
} from "../actions";

const initialState = {
  games: [],
  allGames: [],
  detail: {},
};

function gamesReducer(state = initialState, { type, payload }) {
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
        detail: {},
      };

    case GAME_DETAIL: {
      return {
        ...state,
        detail: { ...payload },
      };
    }

    case GAME_BY_NAME:
      return {
        ...state,
        games: [...payload],
      };

    case ORDER_GAMES:
      return {
        ...state,
        games: [...payload],
      };

    default:
      return { ...state };
  }
}

export default gamesReducer;
