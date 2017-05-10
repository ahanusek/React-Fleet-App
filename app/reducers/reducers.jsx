var uuid = require('node-uuid');

export const searchTextReducer = (state = '', action) => {
		switch(action.type){
			case 'SET_SEARCH_TEXT':
				return action.searchText;
			default:
				return state;
		}
}

export const showSentReducer = (state = true, action) => {
		switch(action.type){
			case 'TOGGLE_SHOW_SENT':
				return !state;
			default:
				return state;
		}
}

export const trucksReducer = (state = [], action) => {
		switch(action.type){
			case 'TOGGLE_SENT_STATUS':
				return state.map(truck => {
					if(truck.id === action.id){
							const newStatus = !action.status;
							return {
								...truck,
								sendTransportOrder: newStatus
							}
					} else {
						return truck
					}
				})
		case 'ADD_TRUCK':
				return [
					...state,
					action.truck
			];
		case 'ADD_TRUCKS':
				return[
					...action.trucks
				];
		case 'REMOVE_TRUCK':
			return state.filter(truck => truck.id !== action.id)
		case 'EDIT_TRUCK':
			return state.map(truck => {
				if(truck.id === action.truck.id){
					return action.truck
				} else {
					return truck;
				}
			})
		default:
				return state;
		}
}
