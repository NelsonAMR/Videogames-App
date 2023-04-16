const url = "http://localhost:3001/games";

export const GET_GAMES = "GET_GAMES";
export const CLEAR_STATE = "CLEAR_STATE";
export const GAME_BY_NAME = "GAME_BY_NAME";

export const getGames = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      dispatch({
        type: GET_GAMES,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const clearState = () => {
  return { type: CLEAR_STATE };
};

export const gameByName = (name) => {
  return async (disptach) => {
    try {
      const resp = await fetch(`${url}/search?name=${name}`);
      const data = await resp.json();

      disptach({
        type: GAME_BY_NAME,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};
