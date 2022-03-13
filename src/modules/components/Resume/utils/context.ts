import React from "react";

export const ResumeContext = React.createContext(null);

export const useResumeContext = () => {
  const context = React.useContext(ResumeContext);
  if (!context)
    throw new Error("useResumeContext cannot be used outside it's provider");
  return context;
};
