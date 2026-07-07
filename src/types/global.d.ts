export {};

declare global {
	interface RepositoryTopic {
		topic: { name: string };
	}

	interface Repository {
		name: string;
		description: string;
		homepageUrl: string;
		url: string;
		repositoryTopics: {
			nodes: RepositoryTopic[];
		};
	}

	interface PinnedRepositoriesResponse {
		data: {
			user: {
				pinnedItems: {
					nodes: Repository[];
				};
			};
		};
	}

	interface BlogPost {
		filename: string;
		content: string;
	}
}
