import React, {Component} from 'react';
import FleetItem from 'FleetItem';
import {connect} from 'react-redux';
var TodoAPI = require('TodoAPI');
import * as actions from 'actions';
import moment from 'moment';

class FleetList  extends Component {


	render(){
		var {trucks, showSent, searchText} = this.props;
		var renderTrucks = () => {
			if(trucks.length > 0 ){
				return TodoAPI.filterTrucks(trucks, showSent, searchText).map(truck => {
					return  <FleetItem key={truck.id} truck={truck} />
				})
			} else {
				return (
					<tr>
						<td className="empty-list">Dodaj pojazd do listy przez poniższy formularz</td>
					</tr>
				)
			}
		}
		return (
			<div>
				<table>
				  <thead>
				    <tr>
				      <th>Spedycja</th>
							<th>Pojazd</th>
				      <th>Kierunek/Trasa</th>
				      <th>Rejon</th>
							<th>Stawka</th>
							<th>Spedytor</th>
				      <th>Zlecenie</th>
							<th>Modyfikuj</th>
				    </tr>
				  </thead>
					<tbody>
				      {renderTrucks()}
					</tbody>
				</table>
			</div>
		)
	}
};


export default connect(
	(state) => {
		return state;
	}
)(FleetList)
