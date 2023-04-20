const url = "http://localhost:3001/games";
const urlGenres = "http://localhost:3001/genres";
const urlPlatforms = "http://localhost:3001/platforms";

export const GET_GAMES = "GET_GAMES";
export const GAME_DETAIL = "GAME_DETAIL";
export const CLEAR_STATE = "CLEAR_STATE";
export const GAME_BY_NAME = "GAME_BY_NAME";
export const ACT_FILTERS = "ACT_FILTERS";
export const ORDER_GAMES = "ORDER_GAMES";
export const GET_PAGE = "GET_PAGE";
export const FILTER_GAMES = "FILTER_GAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_PLATFORMS = "GET_PLATFORMS";

export const actFilters = () => {
  return {
    type: ACT_FILTERS,
  };
};

export const getGames = (name = null) => {
  return async (dispatch) => {
    try {
      let resp;
      if (!name) {
        resp = await fetch(url);
      } else {
        resp = await fetch(`${url}?name=${name}`);
      }
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

export const orderGames = (order) => {
  return (dispatch) => {
    dispatch({
      type: ORDER_GAMES,
      payload: order,
    });
  };
};

export const filterGames = (filter) => {
  return (disptach) => {
    disptach({
      type: FILTER_GAMES,
      payload: filter,
    });
  };
};

export const getPage = (page) => {
  return (dispatch) => {
    dispatch({
      type: GET_PAGE,
      payload: page,
    });
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    const resp = await fetch(urlGenres);
    const data = await resp.json();

    dispatch({
      type: GET_GENRES,
      payload: data,
    });
  };
};

export const getPlatforms = () => {
  return async (dispatch) => {
    const resp = await fetch(urlPlatforms);
    const data = await resp.json();

    dispatch({
      type: GET_PLATFORMS,
      payload: data,
    });
  };
};
