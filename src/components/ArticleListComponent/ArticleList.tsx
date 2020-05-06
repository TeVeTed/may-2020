import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { API } from '../../api';

import './ArticleList';

interface IArticle {
	Id: number;
	ID: number;
	PostCategory: {
		results: Array<{Id: number}>
	},
	Title: string;
}

function ArticleList() {
	const [ articles, setArticles ] = useState<Array<IArticle>>([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await API.getArticleList(10);

			setArticles(result);
		};

		fetchData();
	}, []);

	return (
		<div>
			{articles.map((item, i) => (
				<p key={i}>
					<Link to={`/article/${item.Id}`}>
						{item.Title}
					</Link>
				</p>
			))}
		</div>
	);
}

export default ArticleList;
