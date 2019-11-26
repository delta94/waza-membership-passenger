import {
	SEND_REQUEST,
	STOP_REQUEST,
	RECEIVE_BOUGHT_COMBO,
	RECEIVE_MY_COMBOS,
	STOP_COMBO,
	FETCH_MY_COMBO,
	CLEAR_MY_COMBOS
} from '../actions/my-combos/types';

const initState = {
	items: [],
	isFetching: false,
	fetched: false
};

export const myComboReducer = (state = initState, action) => {
	switch (action.type) {
		case SEND_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case STOP_REQUEST:
			return {
				...state,
				isFetching: false
			};
		case RECEIVE_BOUGHT_COMBO:
			return {
				...state,
				items: [ action.boughtCombo, ...state.items ],
			};
		case FETCH_MY_COMBO:
			return {
				...state,
				fetched: true
			}
		case RECEIVE_MY_COMBOS:
			return {
				...state,
				items: [ ...action.myCombos ],
			};
		case STOP_COMBO:
			let newItems = state.items.slice();
			const stopIndex = newItems.findIndex((item) => item._id === action.stopedCombo._id);
			newItems.splice(stopIndex, 1, action.stopedCombo);
			return {
				...state,
				items: newItems
			};
		case CLEAR_MY_COMBOS:
			return {...initState}
		default:
			return state;
	}
};
