import React, {Component} from 'react';
import FleetList from 'FleetList'
import FleetAddForm from 'FleetAddForm';
import FleetCounter from 'FleetCounter'
var FleetAPI = require('FleetAPI');
import {connect} from 'react-redux';
import * as actions from '../actions/actions.jsx';


class FleetApp extends Component{

	render (){
		const {dispatch} = this.props;
		return (
			<div>
				<div className="logout-button">
					<a href="#" className="button" onClick={() => dispatch(actions.logOut())}>Wyloguj się</a>
				</div>
				<div className="container">

					<FleetCounter/>
					<FleetList/>
					<FleetAddForm />
				</div>
			</div>

		)
	}
};


export default connect()(FleetApp);
