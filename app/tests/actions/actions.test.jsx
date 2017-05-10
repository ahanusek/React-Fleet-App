import expect from 'expect';
import * as actions from 'actions';


describe('Actions', () => {
	it('should generate search text', () => {
		const action = {
			type: "SET_SEARCH_TEXT",
			searchText: "Something"
		}

		const res = actions.setSearchText(action.searchText)

		expect(res).toEqual(action);
	})
})
