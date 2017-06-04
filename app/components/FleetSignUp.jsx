import React, {Component} from 'react';
var FleetAPI = require('FleetAPI');
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.jsx';


class FleetSignUp extends Component{

	UserAuthenticate(e) {
		const {dispatch} = this.props;
		e.preventDefault();
		let email = this.refs.login.value;
		let pass = this.refs.pass.value;
		let passConfirm = this.refs.passConfirm.value;
		if(passConfirm === pass){
			dispatch(actions.signUpByEmail(email, pass));
		}
	}

	render (){
		return (
			<div>
				<div className="logout-button">
					<Link to="/">
						<button className="button">Zaloguj się</button>
					</Link>
				</div>
				<div className="container">
					<div className="row">
						<div className="small-4 small-offset-4 columns login-container">
							<h3>Załóż nowe konto</h3>
							<form onSubmit={this.UserAuthenticate.bind(this)}>
								<input ref="login" type="text" placeholder="Login"/>
								<input ref="pass" type="password" placeholder="Hasło"/>
								<input ref="passConfirm" type="password" placeholder="Potwierdź hasło"/>
								<button type="submit" className="button">Zarejestruj nowe konto</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
};


export default connect()(FleetSignUp);
