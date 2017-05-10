var React = require('react');
var ReactDOM = require('react-dom');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import FleetApp from 'FleetApp';


import * as actions from 'actions';
var store = require('configure').configure();

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
		<FleetApp/>
  </Provider>,
  document.getElementById('app')
);
