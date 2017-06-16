import React, {Component} from 'react';
import FleetList from 'FleetList'
import FleetAddForm from 'FleetAddForm';
import FleetCounter from 'FleetCounter'
import FleetDate from '../components/FleetDate';
var FleetAPI = require('FleetAPI');
import {connect} from 'react-redux';
import * as actions from '../actions/actions.jsx';
import Example from '../components/example.jsx';

class FleetApp extends Component{

	render (){
		let {dispatch, user} = this.props;
		return (
			<div>


				<div className="logout-button">
					<div className="user-info">
						<span className="button">Użytkownik: {user.email}</span>
						<button className="button">Baza spedycji</button>
				</div>
					<a href="#" className="button" onClick={() => dispatch(actions.logOut())}>Wyloguj się</a>
				</div>
				<div className="container">
				<div className="controls-container">
					<FleetCounter/>
					<FleetDate/>
				</div>
					<FleetList/>
					<FleetAddForm />
				</div>
			</div>

		)
	}
};


function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(FleetApp);
