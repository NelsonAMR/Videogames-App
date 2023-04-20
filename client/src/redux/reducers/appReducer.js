import { ACT_FILTERS, GET_PAGE } from "../actions";

const initialState = {
  filterState: false,
  page: 1,
  size: 15,
};

function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACT_FILTERS:
      return {
        ...state,
        filterState: !state.filterState ? true : false,
      };

    case GET_PAGE:
      return {
        ...state,
        page: payload,
      };

    default:
      return { ...state };
  }
}

export default appReducer;
