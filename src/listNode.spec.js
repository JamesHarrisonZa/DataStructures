const ListNode = require('./listNode');
const assert = require('assert');

describe('A Node,', () => {
	describe('set with a given value,', () => {
		const actual = new ListNode(42).value;
		const expected = 42;
		it('should return the value', () => assert.equal(actual, expected));
	});

	describe('set with a next Node,', () => {
		const nextNode = new ListNode(1, null, null);
		const actual = new ListNode(0, nextNode).next;
		const expected = nextNode;
		it('should return the next Node', () => assert.equal(actual, expected));
	});

	describe('set with a previous Node,', () => {
		const previousNode = new ListNode(-1, null, null);
		const actual = new ListNode(0, null, previousNode).previous;
		const expected = previousNode;
		it('should return the previous Node', () => assert.equal(actual, expected));
	});
});