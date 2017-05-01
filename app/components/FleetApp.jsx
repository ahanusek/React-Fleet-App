var React = require('react');
var FleetList = require('FleetList');
var FleetAddForm = require('FleetAddForm');
var FleetCounter = require('FleetCounter');

var FleetApp = React.createClass({
	getInitialState: function(){
		return {
			trucks: [
				{
					id: 0,
					forwarding: "Supertrans",
					forwarder: "Lukasz Tomaszewski",
					freight: 1250,
					vehicle: '33 MPT',
					region: "PL0",
					direction: "Błonie/Wyszków/Stryków",
					sendTransportOrder: false,
					extraInfo: {
						email: "hanys006@gmail.com",
						transID: 75655654,
						phoneNumber: 6966565655,
						truckInfo: "WRA78088/WBA055055 Dawid Jarek",
						additionalInfo: "Moze ruszyć po 20:00"
					}
				},
				{
					id: 1,
					forwarding: "Jomar",
					forwarder: "Mariusz Barszcz",
					freight: 1100,
					vehicle: '33 MPT',
					region: "PL2",
					direction: "Lublin/Lubartów",
					sendTransportOrder: false,
					extraInfo: {
						email: "jomar@sped.pl",
						transID: 656565,
						phoneNumber: 9898808,
						truckInfo: "Sba4545/sbaw44",
						additionalInfo: "Moze ruszyć po 21:00"
					}
				},
				{
					id: 2,
					forwarding: "Supertrans",
					forwarder: "Lukasz Tomaszewski",
					freight: 1250,
					vehicle: '33 MPT',
					region: "PL0",
					direction: "Błonie/Wyszków/Stryków",
					sendTransportOrder: true,
					extraInfo: {
						email: "hanys006@gmail.com",
						transID: 75655654,
						phoneNumber: 6966565655,
						truckInfo: "WRA78088/WBA055055 Dawid Jarek",
						additionalInfo: "Moze ruszyć po 20:00"
					}
				}
			],
			showSent: true
		}
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
