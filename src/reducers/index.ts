import { DATA_LOAD } from '../constants/action-types';

const rootReducer = (state, action) => {
	switch (action.type) {
		case DATA_LOAD:
			return {
				...state,
				articlesList: action.payload
			}
		default:
			break;
	}

	return state;
};

export default rootReducer;
