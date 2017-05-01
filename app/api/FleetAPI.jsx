module.exports = {

	filterFleet: function (trucks, showSent) {
    var filteredFleet = trucks;

    // Filter by showCompleted
    filteredFleet = filteredFleet.filter(truck => {
      return !truck.sendTransportOrder || showSent;
    });

    // // Filter by searchText
		// filteredTodos = filteredTodos.filter(todo => {
		// 	var todoText = todo.text.toLowerCase();
		// 	if(searchText === "" || searchText === undefined){
		// 		return todo;
		// 	}
		//
		// 	if(todoText.indexOf(searchText) > -1){
		// 		return todo;
		// 	}
		// });

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
  }
};
