const LinkedList = require('./linkedList');
const Node = require('./node');
const assert = require('assert');

describe('A LinkedList,', () => {
	describe('with no items,', () => { 
		const linkedList = new LinkedList();
		
		describe('when calling count(),', () => {
			let actual;
			const expected = 0;
			before(() => {
				actual = linkedList.count;
			});
			it('should have count of zero', () => assert.equal(actual, expected));
		});

		describe('when calling getFirst(),', () => {
			let actual;
			const expected = null;
			before(() => {
				actual = linkedList.getFirst();
			});
			it('should return null', () => assert.equal(actual, expected));
		});

		describe('when calling getLast(),', () => {
			let actual;
			const expected = null;
			before(() => {
				actual = linkedList.getLast();
			});
			it('should return null', () => assert.equal(actual, expected));
		});

		describe('when calling addFirst(),', () => {
			let actual;
			const expected = 1;
			before(() => {
				const linkedList = new LinkedList();
				linkedList.addFirst(new Node(1));
				actual = linkedList.count;
			});
			it('should return a count of one', () => assert.equal(actual, expected));
		});

		describe('when calling addLast(),', () => {
			let actual;
			const expected = 1;
			before(() => {
				const linkedList = new LinkedList();
				linkedList.addLast(new Node(1));
				actual = linkedList.count;
			});
			it('should return a count of one', () => assert.equal(actual, expected));
		});
	});
});