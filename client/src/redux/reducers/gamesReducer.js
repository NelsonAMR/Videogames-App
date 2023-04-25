import {
  CLEAR_STATE,
  DELETE_GENRE,
  DELETE_PLATFORM,
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
  allGenres: [],
  platforms: [],
  allPlatforms: [],
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
        allGenres: [...state.allGenres, ...payload],
      };

    case DELETE_GENRE:
      return {
        ...state,
        genres: state.genres.filter((genre) => genre !== payload),
      };

    case GET_PLATFORMS:
      return {
        ...state,
        platforms: [...state.platforms, ...payload],
        allPlatforms: [...state.allPlatforms, ...payload],
      };

    case DELETE_PLATFORM:
      return {
        ...state,
        platforms: state.platforms.filter((platform) => platform !== payload),
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

    case CLEAR_STATE:
      return {
        ...state,
        games: [],
        allGames: [],
        genres: [],
        platforms: [],
        detail: {},
      };

    default:
      return { ...state };
  }
}

export default gamesReducer;
