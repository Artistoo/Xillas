import React from "react";
export const FooterNavigateContext = React.createContext();

export default function FooterNavigate({ children }) {
  const [to, setTo] = React.useState();
  return (
    <FooterNavigateContext.Provider value={{to, setTo}}>
      {children}
    </FooterNavigateContext.Provider>
  );
}
