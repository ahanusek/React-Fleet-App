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

export const startAddTruck = (truck, date) => {
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
		const trucksRef = firebaseRef.child(`trucks/${date}`).push(truck);

		// return trucksRef.then(() => {
		// 	dispatch(addTruck({
		// 		...truck,
		// 		id: trucksRef.key
		// 	}));
		// })
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


export const startAddTrucks = (date) => {
	return(dispatch, getState) => {
		const trucksRef = firebaseRef.child(`trucks/${date}`);
		console.log(trucksRef)
		trucksRef.on('value', (snapshot) => {
			console.log('value', snapshot.val());
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

export const loginUser = (uid, email) => {
	return {
		type: "LOGIN_USER",
		uid,
		email
	}
}

export const upgradeList = (date) => {
	return(dispatch, getState) => {
			let previousDate = (getState().date)
			firebaseRef.child(`trucks/${previousDate}`).off();
				dispatch(changeDate(date));
				dispatch(startAddTrucks(date));

		}
	}

export const changeDate = (date) => {
	return {
		type: "CHANGE_DATE",
		date
	}
}

export const startToggleSentStatus = (id, sendTransportOrder, date) => {
	return(dispatch, getState) => {
		const truckRef = firebaseRef.child(`trucks/${date}/${id}`);
		const updates = {
			sendTransportOrder: !sendTransportOrder
		}

		return truckRef.update(updates).then(() => {
			dispatch(toggleSentStatus(id, sendTransportOrder))
		})
	}
}

export const startEditTruck = (editingTruck, date) => {
	return(dispatch, getState) => {
		const truckRef = firebaseRef.child(`trucks/${date}/${editingTruck.id}`);
		const updates = editingTruck;

		return truckRef.update(updates).then(() => {
			dispatch(editTruck(editingTruck))
		})
	}
}

export const startRemoveTruck = (id, date) => {
	return(dispatch, getState) => {
		const truckRef = firebaseRef.child(`trucks/${date}/${id}`);


		return truckRef.remove().then(() => {
			dispatch(removeTruck(id))
		})
	}
}

export const loginByEmail = (email,pass) => {
	return(dispatch, getState) => {
		const auth = firebase.auth();
		const login = auth.signInWithEmailAndPassword(email, pass);

		login
			.catch(e => {
			console.log(e.message)
		})
	}
}


export const signUpByEmail = (email,pass) => {
	return(dispatch, getState) => {
		const auth = firebase.auth();
		const signup = auth.createUserWithEmailAndPassword(email, pass);

		signup
			.catch(e => {
			console.log(e.message)
		})
	}
}

export const logOut = () => {
	return(dispatch, getState) => {
		const auth = firebase.auth();
		const logout = auth.signOut();

		logout
			.then(() => console.log('Log Out'))
			.catch(e => {
			console.log(e.message)
		})
	}
}
