import { createContext, useCallback, useContext, useState } from "react";
import Alert from "./Alert";

const AlertContext = createContext(null);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = useCallback((message, type = "info", duration = 4000) => {
    setAlert({
      message,
      type,
    });

    if (duration > 0) {
      setTimeout(() => {
        setAlert(null);
      }, duration);
    }
  }, []);

  const closeAlert = useCallback(() => {
    setAlert(null);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert, closeAlert }}>
      {children}

      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={closeAlert}
        />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("useAlert must be used inside an AlertProvider");
  }

  return context;
};