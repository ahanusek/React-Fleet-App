import React, {Component} from 'react';
var FleetAPI = require('FleetAPI');
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.jsx';


class FleetLogin extends Component{

	UserAuthenticate(e) {
		const {dispatch} = this.props;
		e.preventDefault();
		let email = this.refs.login.value;
		let pass = this.refs.pass.value;
		dispatch(actions.loginByEmail(email, pass));
	}

	render (){
		return (
			<div>
				<div className="logout-button">
					<Link to="/signup">
						<button className="button">Zarejestruj się</button>
					</Link>

				</div>
				<div className="container">
					<div className="row">
						<div className="small-4 small-offset-4 columns login-container">
							<h3>Panel logowania</h3>
							<form onSubmit={this.UserAuthenticate.bind(this)}>
								<input ref="login" type="text" placeholder="Login"/>
								<input ref="pass" type="password" placeholder="Password"/>
								<button type="submit" className="button">Zaloguj się</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
};


export default connect()(FleetLogin);
