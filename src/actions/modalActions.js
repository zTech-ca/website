import { MODAL_OFF } from "./types";

export const hideModal = () => dispatch => {
  dispatch({ type: MODAL_OFF });
};
