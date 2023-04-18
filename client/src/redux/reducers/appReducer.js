import { ACT_FILTERS } from "../actions";

const initialState = {
  filter: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ACT_FILTERS:
      return {
        ...state,
        filter: !state.filter ? true : false,
      };

    default:
      return { ...state };
  }
}

export default appReducer;
