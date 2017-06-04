var React = require('react');
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';
import FleetApp from 'FleetApp';
import FleetLogin from 'FleetLogin';
import FleetSignUp from '../components/FleetSignUp.jsx';
import firebase from '../api/firebase.js';


const requireLogin = (nextState, replace, next) => {
	if(!firebase.auth().currentUser){
		replace('/');
	}
	next();
}

const redirectIfLoggedIn = (nextState, replace, next) => {
	if(firebase.auth().currentUser){
		replace('/fleet');
	}
	next();
}

export default(
	<Router history={hashHistory}>
		<Route path="/" component={FleetLogin} onEnter={redirectIfLoggedIn}/>
		<Route path="/fleet" component={FleetApp} onEnter={requireLogin}/>
		<Route path="/signup" component={FleetSignUp}/>
	</Router>
)
