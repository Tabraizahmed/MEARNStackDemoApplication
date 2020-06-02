import { v4 as uuid } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (msg, alertType) => (dispach) => {
  const id = uuid();

  dispach({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispach({ type: REMOVE_ALERT, payload: id }), 5000);
};
