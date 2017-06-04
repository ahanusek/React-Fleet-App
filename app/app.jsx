var React = require('react');
var ReactDOM = require('react-dom');
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import firebase from '../app/api/firebase.js';
import * as actions from 'actions';
var store = require('configure').configure();
import router from '../app/router/index.jsx';

firebase.auth().onAuthStateChanged((user) => {
	if(user){
		console.log(user)
		hashHistory.push('/fleet');
	} else {
		console.log('niezalogowany')
		hashHistory.push('/');
	}
})




store.subscribe(() => {
	console.log('New state', store.getState())
})

store.dispatch(actions.startAddTrucks());

//Load foundation
$(document).foundation();

//App css
import 'materialize-css/js/materialize.js';
require('style!css!sass!applicationStyles');




ReactDOM.render(
  <Provider store={store}>
		{router}
  </Provider>,
  document.getElementById('app')
);
