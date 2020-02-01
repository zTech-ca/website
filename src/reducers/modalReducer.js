import { MODAL_OFF, MODAL_CONTACT, MODAL_LOGIN } from "../actions/types";
import { CONTACT, LOGIN } from '../constants/modalModes'

const initialState = null

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OFF:
      return null;
    case MODAL_CONTACT:
      return CONTACT
    case MODAL_LOGIN:
      return LOGIN
    default:
      return state;
  }
};

export default modalReducer;
