import React from "react";
export const ErrorContext = React.createContext();

export default function ErrorProvider({ children }) {
  const [error, setError] = React.useState({
    img: "",
    onClick: '',
    name: "",
    type: "",
    message: "",
    
  });
  return (
    <ErrorContext.Provider value={{ error: error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
}
