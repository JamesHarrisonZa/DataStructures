const Node = require('./node');
const assert = require('assert');

describe('A Node,', () => {
	describe('set with a given value,', () => {
		let actual;
		const expected = 42;

		before(() => {
			actual = new Node(42).value;
		});

		it('should return that value', () => assert.equal(actual, expected));
	});
});