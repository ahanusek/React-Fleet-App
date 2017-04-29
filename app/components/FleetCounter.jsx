var React = require('react');

var FleetCounter = React.createClass({
	render: function(){
		var {trucks} = this.props;

		function Calculate(){
			var number = 0;
			var newTrucks = trucks.forEach(truck => {
				if(truck.vehicle === "33 MPT"){
					number = number + 28;
				}
				return truck;
			})
			return number;
		};
		return (
			<h3>Liczba pojazdów: {trucks.length} Ilość palet: {Calculate()}</h3>

		)
	}
})


module.exports = FleetCounter;
