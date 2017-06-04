import firebase from 'firebase';

var $ = require('jQuery');


try {
	var config = {
		apiKey: "AIzaSyBtRGZWShsGPofYG8lpIqhLh7v_jeerk-Y",
		authDomain: "fleet-app-1b485.firebaseapp.com",
		databaseURL: "https://fleet-app-1b485.firebaseio.com",
		projectId: "fleet-app-1b485",
		storageBucket: "fleet-app-1b485.appspot.com",
		messagingSenderId: "375309772004"
	};
	firebase.initializeApp(config);
} catch (e) {
	console.error("Firebase Error", e)
}

export const firebaseRef = firebase.database().ref();


export default firebase;
