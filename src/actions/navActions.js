import { MODAL_CONTACT, MODAL_LOGIN } from "./types";

export const openContactModal = () => dispatch => {
  dispatch({type: MODAL_CONTACT})
}

export const openLoginModal = () => dispatch => {
  dispatch({type: MODAL_LOGIN})
}