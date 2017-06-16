import React, {Component} from 'react';
var FleetAPI = require('FleetAPI');
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.jsx';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class FleetDate extends Component{
	constructor (props) {
	super(props)
	this.handleChange = this.handleChange.bind(this);
}

handleChange(date) {
	let {dispatch} = this.props;
	dispatch(actions.upgradeList(date.format("DD-MM-YYYY")));

}


	render (){
		let {date} = this.props;
		return (
			<div className="date-container">
				Data załadunku:
				<DatePicker
					todayButton={"Dzisiaj"}
					locale="en-gb"
					dateFormat="DD/MM/YYYY"
					selected={moment(date, "DD-MM-YYYY")}
        	onChange={this.handleChange}
					/>
			</div>
		)
	}
};

function mapStateToProps(state) {
  return {
    date: state.date
  };
}
export default connect(mapStateToProps)(FleetDate);
