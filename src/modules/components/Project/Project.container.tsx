import { graphql, StaticQuery } from "gatsby";
import React from "react";
import IProject from "../../Types/IProject";
import ProjectView from "./Project.view";
import { ProjectContext } from "./utils/context";

export default function ProjectContainer() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityProjects {
            nodes {
              thumbnail
              description
              live
              name
              github
            }
          }
        }
      `}
      render={(data: IProject) => (
        <ProjectContext.Provider
          //@ts-ignore
          value={{ data }}
        >
          <ProjectView />
        </ProjectContext.Provider>
      )}
    />
  );
}
