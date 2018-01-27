'use strict';

const ListNode = require('./listNode');
const assert = require('assert');

describe('A ListNode,', () => {
	
	describe('set with a given value,', () => {
		describe('.value, ', () => {
			it('should return that value', () => {
				const actual = new ListNode(42).value;
				const expected = 42;
				assert.equal(actual, expected)
			});
		});
	});

	describe('set with a next Node,', () => {
		describe('.next, ', () => {
			it('should return the next Node', () => {
				const nextNode = new ListNode(1, null, null);
				const actual = new ListNode(0, nextNode).next;
				const expected = nextNode;
				assert.equal(actual, expected)
			});
		});
	});

	describe('set with a previous Node,', () => {
		describe('.next, ', () => {
			it('should return the previous Node', () => {
				const previousNode = new ListNode(-1, null, null);
				const actual = new ListNode(0, null, previousNode).previous;
				const expected = previousNode;
				assert.equal(actual, expected)
			});
		});
	});
});