export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
}

export interface IExperience {
  name: string;
  position: string;
  employer: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;

}
export interface IProjects {
  projects: IProject[];
}

export interface IPosts {
  num: number;
  sectionTitle: string;
}


export interface IProjectDetails {
  projectDetail: IProject;
}
