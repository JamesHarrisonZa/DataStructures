const LinkedList = require('./linkedList');
const assert = require('assert');

describe('A LinkedList,', () => {

	describe('with no items,', () => { 
		let actual;
		const expected = 0;

		before(() => {
			actual = new LinkedList().count;
		});

		it('should have count of zero', () => assert.equal(actual, expected));
	});
});