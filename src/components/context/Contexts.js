import React, { createContext, useState } from "react";

export const context = createContext();

export const AdminContext = ({ children }) => {
  const [adminMode, setAdminMode] = useState(false);

  return (
    <context.Provider
      value={{
        adminMode: adminMode,
        setAdminMode: setAdminMode,
      }}
    >
      {children}
    </context.Provider>
  );
};
