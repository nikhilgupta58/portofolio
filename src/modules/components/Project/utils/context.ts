import React from "react";

export const ProjectContext = React.createContext(null)

export const useProjectContext = () =>{
    const context = React.useContext(ProjectContext)
    if(!context)
        throw new Error("useProjectContext cannot be used outside it's provider")
    return context
}