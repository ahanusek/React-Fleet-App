import firebase, {firebaseRef} from './../api/firebase';

export const setSearchText = (searchText) => {
		return {
			type: "SET_SEARCH_TEXT",
			searchText
		}
}

export const toggleShowSent = () => {
	return {
		type: "TOGGLE_SHOW_SENT"
	}
}

export const toggleSentStatus = (id, status) => {
	return {
		type: "TOGGLE_SENT_STATUS",
		id,
		status
	}
}

export const startAddTruck = (truck) => {
	let newTruck = truck;
	return (dispatch, getState) => {
		const truck = {
					forwarding: newTruck.forwarding,
					forwarder: newTruck.forwarder,
					freight: newTruck.freight || "--",
					vehicle: newTruck.vehicle,
					region: newTruck.region,
					direction: newTruck.direction,
					sendTransportOrder: false,
					extraInfo: {
						email: newTruck.extraInfo.email || "",
						transID: newTruck.extraInfo.transID || "",
						phoneNumber: newTruck.extraInfo.phoneNumber || "",
						truckInfo: newTruck.extraInfo.truckInfo || "",
						additionalInfo: newTruck.extraInfo.additionalInfo || ""
				}
			}
		const trucksRef = firebaseRef.child('trucks').push(truck);

		return trucksRef.then(() => {
			dispatch(addTruck({
				...truck,
				id: trucksRef.key
			}));
		})
	};
};

export const addTruck = (truck) => {
		return {
			type: "ADD_TRUCK",
			truck
		}
}

export const addTrucks = (trucks) =>{
		return {
			type: "ADD_TRUCKS",
			trucks
		}
}

export const startAddTrucks = () => {
	return(dispatch, getState) => {
		const trucksRef = firebaseRef.child(`trucks`);

		trucksRef.on('value', (snapshot) => {
			let trucks = snapshot.val() || {};
			let trucksArray = []
			for (const key of Object.keys(trucks)) {
					trucksArray.push({
						id: key,
						...trucks[key]
					})
				};
			dispatch(addTrucks(trucksArray));
		})
	}
}

export const editTruck = (truck) => {
	return {
		type: "EDIT_TRUCK",
		truck
	}
}

export const removeTruck = id => {
	return {
		type: "REMOVE_TRUCK",
		id
	}
}

export const startToggleSentStatus = (id, sendTransportOrder) => {
	return(dispatch, getState) => {
		const truckRef = firebaseRef.child(`trucks/${id}`);
		const updates = {
			sendTransportOrder: !sendTransportOrder
		}

		return truckRef.update(updates).then(() => {
			dispatch(toggleSentStatus(id, sendTransportOrder))
		})
	}
}

export const startEditTruck = (editingTruck) => {
	return(dispatch, getState) => {
		const truckRef = firebaseRef.child(`trucks/${editingTruck.id}`);
		const updates = editingTruck;

		return truckRef.update(updates).then(() => {
			dispatch(editTruck(editingTruck))
		})
	}
}

export const startRemoveTruck = (id) => {
	return(dispatch, getState) => {
		const truckRef = firebaseRef.child(`trucks/${id}`);


		return truckRef.remove().then(() => {
			dispatch(removeTruck(id))
		})
	}
}
