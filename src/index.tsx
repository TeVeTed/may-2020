import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import './global';

if (module.hot) {
	module.hot.accept()

	module.hot.addStatusHandler(status => {
		if (status === 'prepare') console.clear()
	})
}

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
