import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import {showSentReducer, trucksReducer, searchTextReducer} from 'reducers';


export const configure = () => {
	const reducer = combineReducers({
		searchText: searchTextReducer,
		showSent: showSentReducer,
		trucks: trucksReducer
	});

	const store = createStore(reducer, compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	))


	return store;
}
