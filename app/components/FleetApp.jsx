var React = require('react');
var FleetList = require('FleetList');
var FleetAddForm = require('FleetAddForm');
var uuid = require('node-uuid');

var FleetApp = React.createClass({
	getInitialState: function(){
		return {
			trucks: [
				{
					id: 0,
					forwarding: "Supertrans",
					forwarder: "Lukasz Tomaszewski",
					freight: 1250,
					vehicle: '33MPT',
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
					vehicle: '33MPT',
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
					vehicle: '33MPT',
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
				}
			],
			showSent: false
		}
	},
	onFormSubmit: function(newItem){
		this.setState({
			trucks: [
				...this.state.trucks,
				newItem
			]
		})
	},
	render: function(){
		var {trucks} = this.state;
		return (
			<div className="container">
				<FleetList trucks={trucks}/>
				<FleetAddForm onFormSubmit={this.onFormSubmit}/>
			</div>
		)
	}
});


module.exports = FleetApp;
