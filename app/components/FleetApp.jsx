import React, {Component} from 'react';
import FleetList from 'FleetList'
import FleetAddForm from 'FleetAddForm';
import FleetCounter from 'FleetCounter'
var FleetAPI = require('FleetAPI');


class FleetApp extends Component{
	render (){
		return (
			<div className="container">
				<FleetCounter/>
				<FleetList/>
				<FleetAddForm />
			</div>
		)
	}
};


module.exports = FleetApp;
