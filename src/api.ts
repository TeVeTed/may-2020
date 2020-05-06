import axios from 'axios';

import { IArticle } from './typings/article';

const client = axios.create({
	baseURL: 'http://localhost:8081',
	headers: {
		'Accept': 'application/json;odata=verbose'
	}
});

export class API {
	static getArticleList = async (amount: number) => {
		let result = [];

		try {
			const response = await client
				.get(
					`/news/_api/Web/Lists(guid\'cd1e5a72-0fab-4c3c-8bcb-1e01fe66e576\')/items?$top=${amount}&$select=Id,Title,OData__ModerationStatus,PostCategory/Id&$expand=PostCategory&$filter=(PostCategory/Id%20eq%201)%20and%20(OData__ModerationStatus%20eq%200)&$orderby=PublishedDate%20desc`
				);

			result = response.data.d.results
		} catch(error) {
			console.log(error);
		}

		return result;
	};

	static getListItem = async (articleId: number) => {
		let result = {} as IArticle;

		try {
			const response = await client
				.get(
					`/news/_api/web/Lists(guid'cd1e5a72-0fab-4c3c-8bcb-1e01fe66e576')/Items(${articleId})?$select=ID,Title,Body,teather,teatherPic,showButton,LikesCount,NumCommentsId,eventDate,PublishedDate,showgallery,PostCategory/Title&$expand=PostCategory`
				)

			result = response.data.d;
		} catch(error) {
			console.log(error);
		}

		return result;
	};
}
