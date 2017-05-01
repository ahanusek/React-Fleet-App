var $ = require('jQuery');

module.exports = {
	setTrucks: function(trucks){
		if($.isArray(trucks)){
			localStorage.setItem('trucks', JSON.stringify(trucks));
			return trucks;
		}
	},
	getTrucks: function(){
		var stringTrucks = localStorage.getItem('trucks');
		var trucks = [];

		try {
			trucks = JSON.parse(stringTrucks);
		} catch (e) {

		};
		return $.isArray(trucks) ? trucks : [];
	}
};
