import {
  CLEAR_STATE,
  FILTER_GAMES,
  GAME_DETAIL,
  GET_GAMES,
  GET_GENRES,
  GET_PLATFORMS,
  ORDER_GAMES,
} from "../actions";

const initialState = {
  games: [],
  allGames: [],
  genres: [],
  platforms: [],
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

    case GET_GENRES:
      return {
        ...state,
        genres: [...state.genres, ...payload],
      };

    case GET_PLATFORMS:
      return {
        ...state,
        platforms: [...state.platforms, ...payload],
      };

    case CLEAR_STATE:
      return {
        ...state,
        games: [],
        allGames: [],
        genres: [],
        platforms: [],
        detail: {},
      };

    case GAME_DETAIL: {
      return {
        ...state,
        detail: { ...payload },
      };
    }

    case ORDER_GAMES:
      return {
        ...state,
        games: [
          ...state.games.sort((a, b) => {
            switch (payload) {
              case "a-z": {
                if (a?.name.toLowerCase() > b?.name.toLowerCase()) return 1;
                if (a?.name.toLowerCase() < b?.name.toLowerCase()) return -1;
                else return 0;
              }
              case "z-a": {
                if (a?.name.toLowerCase() > b?.name.toLowerCase()) return -1;
                if (a?.name.toLowerCase() < b?.name.toLowerCase()) return 1;
                else return 0;
              }
              default:
                return 0;
            }
          }),
        ],
      };

    case FILTER_GAMES:
      const filters = payload.map((item) => item.name);
      return {
        ...state,
        games: !payload
          ? [...state.allGames]
          : [
              ...state.allGames.filter((game) =>
                filters.every((genre) => game?.genres.includes(genre))
              ),
            ],
      };

    default:
      return { ...state };
  }
}

export default gamesReducer;
