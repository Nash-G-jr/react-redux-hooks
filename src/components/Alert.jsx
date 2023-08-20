import { useContext } from "react";
import { AlertContext } from "../context/alert/AlertState";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert.visible) {
    return null;
  }
  return (
    <div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
      <strong>Atention!</strong>
      &nbsp;{alert.text}
      <button
        onClick={hide}
        type="button"
        className="btn-close"
        aria-label="Close"
      ></button>
    </div>
  );
};
