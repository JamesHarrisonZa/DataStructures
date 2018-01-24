const LinkedList = require('./linkedList');
const assert = require('assert');

describe('A LinkedList,', () => {

	const expected = 42;
	let actual;

	before(() => {
		const linkedList = new LinkedList();
		actual = linkedList.length;
	});

	it('should have length 42', () => assert.equal(actual, expected));
});