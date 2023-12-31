import { createContext, useReducer } from "react";
import { HIDE_ALERT, SHOW_ALERT } from "../types";
import { alertReducer } from "./alertReducer";

export const AlertContext = createContext();

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { vasible: false });

  const show = (text, type = "warning") => {
    dispatch({
      type: SHOW_ALERT,
      payload: { text, type },
    });
  };

  const hide = () => {
    dispatch({
      type: HIDE_ALERT,
    });
  };

  return (
    <AlertContext.Provider value={{ show, hide, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};
