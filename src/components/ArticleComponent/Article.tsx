import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import { API } from '../../api';

import { IArticle } from '../../typings/article';

import './Article';

const createParsedBody = (body: string) => {
	return { __html: body };
};

function Article() {
	const [ article, setArticle ] = useState<IArticle>({ Title: '', Body: '' });

	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const result = await API.getListItem(Number(id));

			setArticle(result);
		};

		fetchData();
	}, []);

	return (
		<>
			<link rel="stylesheet" type="text/css" href="http://mysilpo.fozzy.lan/_catalogs/theme/Themed/C701199D/corev15-E9115CC5.themedcss?ctag=22"/>
			<div>
				<h3>{article.Title}</h3>
				<div dangerouslySetInnerHTML={createParsedBody(article.Body)}></div>
			</div>
			<h2>
				<Link to="/">RETURN</Link>
			</h2>
		</>
	);
}

export default Article;
