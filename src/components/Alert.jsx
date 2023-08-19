export const Alert = ({ alert }) => {
  if (!alert) {
    return null;
  }
  return (
    <div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
      <strong>Atention!</strong>
      {alert.text}
      <button type="button" className="btn-close" aria-label="Close"></button>
    </div>
  );
};
