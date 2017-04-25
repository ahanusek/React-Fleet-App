var React = require('react');


var FleetApp = React.createClass({
	render: function(){
		return (
			<div className="container">
				<FleetList/>
				<FleetAddForm/>
			</div>
		)
	}
});


module.exports = FleetApp;
