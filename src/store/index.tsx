import React, { createContext, useReducer } from 'react';
import rootReducer from '../reducers';

const initialState = {};

const store = createContext(initialState);
const { Provider } = store;

const StoreProvider = ({ children }) => {
	const
		[ state, dispatch ] = useReducer(rootReducer, initialState),
		value = { state, dispatch };

	return (
		<Provider value={value} >
			{ children }
		</Provider>);
};

export { store, StoreProvider }
