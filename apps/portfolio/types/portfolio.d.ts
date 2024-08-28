export interface IRepositoryTopic {
  topic: { name: "inline-editing" };
}

export interface IRepository {
  name: string;
  description: string;
  homepageUrl: string;
  url: string;
  repositoryTopics: {
    nodes: IRepositoryTopic[];
  };
}

export interface IPinnedRepositoriesResponse {
  data: {
    user: {
      pinnedItems: {
        nodes: IRepository[];
      };
    };
  };
}

export interface IProjectCard {
  name: string;
  description: string;
  tags: IRepositoryTopic[];
  source_code_link: string;
  live_demo_link: string;
}
export interface ITagBackgroundColor {
  class: string;
  color: string;
}
export type TRepositoryTagsBackgroundColors = ITagBackgroundColor[];
