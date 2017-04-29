var React = require('react');
var FleetItem = require('FleetItem');

var FleetList = React.createClass({
	render: function(){
		var {trucks} = this.props;
		var renderTrucks = () => {
			if(trucks.length > 0 ){
				return trucks.map(truck => {
					return <FleetItem key={truck.id} truck={truck} />
				})
			} else {
				<h3>Dodaj nową spedycję</h3>
			}
		}
		return (
			<div>
				<table>
				  <thead>
				    <tr>
				      <th>Spedycja</th>
							<th>Pojazd</th>
				      <th>Kierunek</th>
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
});


module.exports = FleetList;
