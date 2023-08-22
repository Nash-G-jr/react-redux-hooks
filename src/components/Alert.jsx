import { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../context/alert/AlertState";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  if (!alert.visible) {
    return null;
  }
  return (
    <CSSTransition
      in={alert.visible}
      timeout={{ enter: 500, exit: 350 }}
      classNames={"alert"}
      mountOnEnter
    >
      <div
        className={`alert alert-${alert.type || "warning"} alert-dismissible`}
      >
        <strong>Atention!</strong>
        &nbsp;{alert.text}
        <button
          onClick={hide}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
      </div>
    </CSSTransition>
  );
};
