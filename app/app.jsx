var React = require('react');
var ReactDOM = require('react-dom');
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import firebase from '../app/api/firebase.js';
import * as actions from 'actions';
var store = require('configure').configure();
import router from '../app/router/index.jsx';
import moment from 'moment';

firebase.auth().onAuthStateChanged((user) => {
	if(user){
		store.dispatch(actions.loginUser(user.uid, user.email))
		hashHistory.push('/fleet');
	} else {
		console.log('niezalogowany')
		hashHistory.push('/');
	}
})




store.subscribe(() => {
	console.log('New state', store.getState())
})

store.dispatch(actions.startAddTrucks(moment().format('DD-MM-YYYY')));

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
