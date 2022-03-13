export default interface IResume {
  sanityResume: {
    destination: string;
    contact: {
      mail: string;
      phone: string;
      address: string;
      website: string;
      linkedin: string;
      github: string;
    };
    summary: string;
    skills: string[];
    education: string[];
    certifcation: string[];
    workHistory: {
      position: string;
      company: string;
      time: string;
      description: string;
    }[];
  };
}
