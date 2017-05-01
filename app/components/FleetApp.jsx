var React = require('react');
var FleetList = require('FleetList');
var FleetAddForm = require('FleetAddForm');
var FleetCounter = require('FleetCounter');
var FleetAPI = require('FleetAPI');

var FleetApp = React.createClass({
	getInitialState: function(){
		return {
			trucks: [],
			showSent: true
		}
	},
	componentDidUpdate: function() {
		FleetAPI.setTrucks(this.state.trucks);
	},
	onToggle: function(id){
		var trucks = this.state.trucks;
		var newTrucks = trucks.map(truck => {
			if(truck.id === id){
				truck.sendTransportOrder = !truck.sendTransportOrder;
			}
			return truck;
		});
		this.setState({
			trucks: [...newTrucks]
		})
	},
	componentDidMount: function() {
		var that = this;
		FleetAPI.getTrucks(that);
	},
	onFormSubmit: function(newItem){
		this.setState({
			trucks: [
				...this.state.trucks,
				newItem
			]
		})
	},
	onFormEdit: function(editItem){
		var trucks = this.state.trucks;
		var newTrucks = trucks.map(truck => {
			if(truck.id === editItem.id){
				truck = editItem
			}
			return truck;
		});
		this.setState({
			trucks: [...newTrucks]
		})
	},
	toggleSentStatus: function() {
		this.setState({
			showSent: !this.state.showSent
		})
	},
	onRemoveItem: function(id){
		this.setState({
			trucks: this.state.trucks.filter(truck => {
					return truck.id !== id;
			})
		})
	},
	render: function(){
		var {trucks, showSent} = this.state;
		function filterFleet(trucks, showSent){
			var filteredFleet = trucks;

			// Filter by showCompleted
			filteredFleet = filteredFleet.filter(truck => {
				return !truck.sendTransportOrder || showSent;
			});
			// Sort todos with non-completed first
			filteredFleet = filteredFleet.sort((truckA,truckB) => {
				if(!truckA.sendTransportOrder && truckB.sendTransportOrder){
					return -1;
				} else if(truckA.sendTransportOrder && !truckB.sendTransportOrder){
					return 1;
				} else {
					return 0;
				}
			});

			return filteredFleet;
		};
		var filteredFleet = filterFleet(trucks, showSent);
		return (
			<div className="container">
				<FleetCounter trucks={trucks} showSent={showSent} toggleSentStatus={this.toggleSentStatus}/>
				<FleetList trucks={filteredFleet} onRemoveItem={this.onRemoveItem} onFormEdit={this.onFormEdit} onToggle={this.onToggle}/>
				<FleetAddForm onFormSubmit={this.onFormSubmit} />
			</div>
		)
	}
});


module.exports = FleetApp;
