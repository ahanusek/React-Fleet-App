var React = require('react');


var FleetItem = React.createClass({
	getInitialState: function(){
		return {
			showPaneInfo: false
		}
	},
	togglePaneInfo: function() {
		this.setState({
			showPaneInfo: !this.state.showPaneInfo
		})
	},
	render: function(){
		var {truck} = this.props;
		return (
			<tr>
				<td>{truck.forwarding}</td>
	      <td>{truck.vehicle}
					<div className="pane-container">
						<button  className="button" type="button" data-toggle="example-dropdown-1">Info</button>
						<div className="dropdown-pane" id="example-dropdown-1" data-dropdown data-hover="true" data-hover-pane="true">
		  			Numery: {truck.extraInfo.truckInfo}<br/>
						Dodatkowe info: {truck.extraInfo.additionalInfo}<br/>
						</div>
					</div>
				</td>
	      <td width="350px">{truck.direction}</td>
	      <td>{truck.region}</td>
				<td>{truck.freight}</td>
				<td>
					{truck.forwarder}
					<div className="pane-container">
						<button  className="button" type="button" data-toggle="example-dropdown-1">Info</button>
						<div className="dropdown-pane" id="example-dropdown-1" data-dropdown data-hover="true" data-hover-pane="true">
		  			E-mail: {truck.extraInfo.email}<br/>
						TransID: {truck.extraInfo.transID}<br/>
						Telefon: {truck.extraInfo.phoneNumber}
						</div>
					</div>

				</td>

				<td><input type="checkbox"/></td>
				<td><button className="button">Edytuj</button> <button className="button">Usuń</button></td>
			</tr>
		)
	}
});


module.exports = FleetItem;
