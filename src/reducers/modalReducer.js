import { MODAL_OFF } from "../actions/types";

const initialState = {
  mode: true
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OFF:
      return { ...state, mode: null };
    default:
      return state;
  }
};

export default modalReducer;
