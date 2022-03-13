export default interface IProject {
  allSanityProjects: {
    nodes: {
      thumbnail: string;
      description: string;
      live: string;
      name: string;
      github: string;
    }[];
  };
}
