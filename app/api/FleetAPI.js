module.exports = {
	filterTrucks: function (trucks, showSent, searchText) {
	 var filteredTrucks = trucks;

	 // Filter by showCompleted
	 filteredTrucks = filteredTrucks.filter((truck) => {
		 return !truck.sendTransportOrder || showSent;
	 });

	 // Filter by searchText
	 filteredTrucks = filteredTrucks.filter((truck) => {
		 var text = truck.forwarding.toLowerCase();
		 return searchText.length === 0 || text.indexOf(searchText) > -1;
	 });

	 // Sort todos with non-completed first
	 filteredTrucks.sort((a, b) => {
		 if (!a.sendTransportOrder && b.sendTransportOrder) {
			 return -1;
		 } else if (a.sendTransportOrder && !b.sendTransportOrder) {
			 return 1;
		 } else {
			 return 0;
		 }
	 });
	 return filteredTrucks;
 }
};
