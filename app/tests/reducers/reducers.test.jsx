import expect from 'expect';
import * as reducers from 'reducers';


describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			const action = {
				type: "SET_SEARCH_TEXT",
				searchText: "Something"
			}

			const res = reducers.searchTextReducer('', action)

			expect(res).toEqual(action.searchText)
		})

		it('should toggle show sent', () => {
			const action = {
				type: "TOGGLE_SHOW_SENT"
			}

			const res = reducers.showSentReducer(false, action)

			expect(res).toEqual(true);
		})
	})

	describe('trucksReducer', () => {
		it('should change sendTransportOrder status', () => {
			const action = {
				type: "TOGGLE_SENT_STATUS",
				id: 1
			}

			const state = [
				{
					id: 0,
					forwarding: 'Jomar',
					sendTransportOrder: false
				},
				{
					id: 1,
					forwarding: 'Supertrans',
					sendTransportOrder: false
				}
			]
				const res = reducers.trucksReducer(state, action);

				expect(res[1].sendTransportOrder).toEqual(true);
		})

		it('should add new truck', () => {
			const action = {
				type: "ADD_TRUCK",
				truck: {
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
			}

			const res = reducers.trucksReducer([], action);

			expect(res[0].forwarding).toEqual(action.truck.forwarding);
		})

		it('should edit truck', () => {
			const action = {
				type: "EDIT_TRUCK",
				truck: {
					id: 0,
					forwarding: "Jomar",
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
			}

			const state = [
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
				}
			]

			const res = reducers.trucksReducer(state, action);

			expect(res[0].forwarding).toEqual(action.truck.forwarding);
		})

		it('should remove truck', () => {
			const action = {
				type: "REMOVE_TRUCK",
				id: 0
			}

			const state = [
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
				}
			]

			const res = reducers.trucksReducer(state, action);

			expect(res.length).toEqual(0);
		})
	})


})
