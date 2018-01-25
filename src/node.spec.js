const Node = require('./node');
const assert = require('assert');

describe('A Node,', () => {
	describe('set with a given value,', () => {
		let actual = new Node(42).value;
		const expected = 42;
		it('should return that value', () => assert.equal(actual, expected));
	});
});