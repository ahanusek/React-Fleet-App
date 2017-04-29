var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var FleetApp = require('FleetApp');

//Load foundation
$(document).foundation();

//App css
import 'materialize-css/js/materialize.js';
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <FleetApp/>,
  document.getElementById('app')
);
