var React = require('react');
var uuid = require('node-uuid');

var FleetAddForm = React.createClass({
	getInitialState: function(){
		return {
			showForm: this.props.truck ? true : false,
			additionalOption: false,
			truckOption: false
		}
	},
	toggleForm: function(){
		this.setState({
			showForm: !this.state.showForm
		})
	},
	toggleAdditionalOption: function(){
		this.setState({
			additionalOption: !this.state.additionalOption
		})
	},
	toggleTruckOption: function(){
		this.setState({
			truckOption: !this.state.truckOption
		})
	},
	onSubmitHandler: function(e){
		e.preventDefault();


			var newTruck = {
				id: this.props.truck ? this.props.truck.id : uuid(),
				forwarding: this.refs.forwarding.value,
				forwarder: this.refs.forwarder.value,
				freight: this.refs.freight.value || "--",
				vehicle: this.refs.vehicle.value,
				region: this.refs.region.value,
				direction: this.refs.direction.value,
				sendTransportOrder: false,
				extraInfo: {
					email: this.refs.email.value || "",
					transID: this.refs.transID.value || "",
					phoneNumber: this.refs.phoneNumber.value || "",
					truckInfo: this.refs.truckInfo.value || "",
					additionalInfo: this.refs.additionalInfo.value || ""
				}
			}


		if(this.props.truck){
			this.props.onFormEdit(newTruck);
			this.props.toggleEditMenu();
		}  else if (newTruck.forwarder.length > 0 && newTruck.forwarding.length > 0 && newTruck.direction.length > 0 && newTruck.region.length > 0 && newTruck.vehicle.length > 0) {
			this.props.onFormSubmit(newTruck);
			for (const key of Object.keys(this.refs)) {
						this.refs[key].value = "";
			}
		} else {
			alert('Wpisze wszystkie wymagane dane');
		}



	},
	render: function(){
		var {truck} = this.props;
		return (
			<div>
				<div style={ this.props.truck ? {display: "none"} : {display: "block"} }>
					<button className="button expanded" onClick={this.toggleForm}>Dodaj nowy pojazd</button>
				</div>
				<div className={this.state.showForm ? "form-container show" : "form-container" }>
					<form id="truckForm" onSubmit={this.onSubmitHandler}>
						<div className="row">
							<div className="small-6 columns">
								<label>Przewoźnik
									<input type="text" ref="forwarding" placeholder="Nazwa i miasto (wymagane)" defaultValue={truck ? truck.forwarding : ""}/>
								</label>
								<label>Rejon
									<select ref="region"  defaultValue={truck ? truck.region : ""}>
										<option value="" disabled>Wybierz rejon</option>
								    <option value="PL0">PL0</option>
								    <option value="PL2">PL2</option>
								    <option value="PL5">PL5</option>
										<option value="PL6">PL6</option>
										<option value="PL8">PL8</option>
								  </select>
								</label>
								<label>Spedytor
									<input ref="forwarder" placeholder="Imię i nazwisko (wymagane)" type="text" defaultValue={truck ? truck.forwarder : ""}/>
								</label>
								<ul className="accordion">
										<li className={this.state.additionalOption ? "accordion-item is-active" : "accordion-item"} data-accordion-item>

								    <h3 onClick={this.toggleAdditionalOption} className="accordion-title">Dodatkowe informacje</h3>


								    <div className="accordion-content" data-tab-content style={this.state.additionalOption ? {display: "block"} : {display: "none"}}>
											<label>Adres e-mail
												<input type="text" ref="email" placeholder="np. spedycja@gmail.com" defaultValue={truck ? truck.extraInfo.email : ""}/>
											</label>
											<label>Trans ID
												<input type="text" ref="transID" placeholder="np. 4590-90" defaultValue={truck ? truck.extraInfo.transID : ""}/>
											</label>
											<label>Telefon
												<input type="text" ref="phoneNumber" placeholder="np. 600 000 000" defaultValue={truck ? truck.extraInfo.phoneNumber : ""}/>
											</label>
								    </div>
								  </li>
								</ul>

							</div>
							<div className="small-6 columns">
								<label>Fracht
									<input type="text" ref="freight" placeholder="np. 1100"  defaultValue={truck ? truck.freight : ""}/>
								</label>
								<label>Trasa/Kierunek
									<input type="text" ref="direction" placeholder="np. Błonie/Wyszków/Lubartów (wymagane)" defaultValue={truck ? truck.direction : ""}/>
								</label>
								<label>Pojazd
								  <select ref="vehicle" defaultValue={truck ? truck.vehicle : ""}>
										<option value="" disabled >Wybierz typ pojazdu</option>
								    <option value="33 MPT">33 MPT</option>
								    <option value="SOLO">22 - 15 MPT</option>
								    <option value="BUS">10 - 8 MPT</option>
								  </select>
								</label>
								<ul className="accordion">
										<li className={this.state.truckOption ? "accordion-item is-active" : "accordion-item"} data-accordion-item>

								    <h3 onClick={this.toggleTruckOption} className="accordion-title">Dane pojazdu</h3>


								    <div className="accordion-content" data-tab-content style={this.state.truckOption ? {display: "block"} : {display: "none"}}>
											<label>Dane pojazdu
												<input type="text" ref="truckInfo" placeholder="np. WRA4443/DBA09433 Jan Kowalski 777 777 777" defaultValue={truck ? truck.extraInfo.truckInfo : ""}/>
											</label>
											<label>Dodatkowe informacje
												<input type="text" ref="additionalInfo" placeholder="np. Godzina podstawienia" defaultValue={truck ? truck.extraInfo.additionalInfo: ""}/>
											</label>
								    </div>
								  </li>
								</ul>


							</div>
							<button className="button success expanded" type="submit">{truck ? "Edytuj pojazd" : "Dodaj pojazd"}</button>
						</div>
					</form>
				</div>

			</div>
		)
	}
});


module.exports = FleetAddForm;
