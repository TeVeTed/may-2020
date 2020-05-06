import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleList from './components/ArticleListComponent/ArticleList';
import Article from './components/ArticleComponent/Article';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={ArticleList} />
			<Route path="/article/:id" component={Article} />
		</Switch>
	);
}

export default App;
