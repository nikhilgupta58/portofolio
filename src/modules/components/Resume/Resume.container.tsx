import { StaticQuery, graphql } from "gatsby";
import React from "react";
import IResume from "../../Types/IResume";
import ResumeView from "./Resume.view";
import { ResumeContext } from "./utils/context";

export default function ResumeContainer() {
  return (
    <StaticQuery
      query={graphql`
        query {
          sanityResume {
            designation
            contact {
              mail
              phone
              address
              website
              linkedin
              github
            }
            summary
            skills
            education
            certifcation
            workHistory {
              position
              company
              time
              description
            }
          }
        }
      `}
      render={(data: IResume) => (
        <ResumeContext.Provider
          //@ts-ignore
          value={{
            data: data,
          }}
        >
          <ResumeView />
        </ResumeContext.Provider>
      )}
    />
  );
}
