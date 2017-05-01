import firebase from 'firebase';

var $ = require('jQuery');


var config = {
	apiKey: "AIzaSyBtRGZWShsGPofYG8lpIqhLh7v_jeerk-Y",
	authDomain: "fleet-app-1b485.firebaseapp.com",
	databaseURL: "https://fleet-app-1b485.firebaseio.com",
	projectId: "fleet-app-1b485",
	storageBucket: "fleet-app-1b485.appspot.com",
	messagingSenderId: "375309772004"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

var trucksRef = firebaseRef.child('trucks');



module.exports = {
	setTrucks: function(trucks){
		firebaseRef.update({
			trucks: trucks
		});
	},
	getTrucks: function(that){
		var trucks = [];
			trucksRef.once('value').then( snapshot => {
				that.setState({
					trucks: snapshot.val() || []
				})
			}, (e) => {
				console.log(e);
			})
	}
};
