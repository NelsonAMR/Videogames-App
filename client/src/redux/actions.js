const url = "http://localhost:3001/games";
//https://pi-videogames-sigma-one.vercel.app/games/32

export const GET_GAMES = "GET_GAMES";
export const GAME_DETAIL = "GAME_DETAIL";
export const CLEAR_STATE = "CLEAR_STATE";
export const GAME_BY_NAME = "GAME_BY_NAME";
export const ACT_FILTERS = "ACT_FILTERS";
export const ORDER_GAMES = "ORDER_GAMES";

export const actFilters = () => {
  return {
    type: ACT_FILTERS,
  };
};

export const getGames = (name = null, order = null, page = 1) => {
  return async (dispatch) => {
    try {
      let resp;

      if (!!name && !!order) {
        resp = await fetch(`${url}?name=${name}&order=${order}&page=${page}`);
      } else if (!!name) {
        resp = await fetch(`${url}?name=${name}&page=${page}`);
      } else if (!!order) {
        resp = await fetch(`${url}?order=${order}&page=${page}`);
      } else {
        resp = await fetch(`${url}?page=${page}`);
        console.log(resp);
      }

      const data = await resp.json();
      console.log(data);

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

export const gameDetail = (id) => {
  return async (dispatch) => {
    const resp = await fetch(`${url}/${id}`);
    const data = await resp.json();

    dispatch({
      type: GAME_DETAIL,
      payload: data,
    });
  };
};

export const gameByName = (name) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`${url}?name=${name}`);
      const data = await resp.json();

      dispatch({
        type: GAME_BY_NAME,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const orderGames = (order) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`${url}?order=${order}`);
      const data = await resp.json();

      dispatch({
        type: ORDER_GAMES,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};
