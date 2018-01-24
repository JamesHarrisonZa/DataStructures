const LinkedList = require('./linkedList');
const Node = require('./node');
const assert = require('assert');

describe('A LinkedList,', () => {
	describe('with no items,', () => { 
		const linkedList = new LinkedList();
		
		describe('count(),', () => {
			let actual;
			const expected = 0;
			before(() => {
				actual = linkedList.count;
			});
			it('should have count of zero', () => assert.equal(actual, expected));
		});

		describe('getFirst(),', () => {
			let actual;
			const expected = null;
			before(() => {
				actual = linkedList.getFirst();
			});
			it('should return null', () => assert.equal(actual, expected));
		});

		describe('getLast(),', () => {
			let actual;
			const expected = null;
			before(() => {
				actual = linkedList.getLast();
			});
			it('should return null', () => assert.equal(actual, expected));
		});

		describe('addFirst(node),', () => {
			let actual;
			const expected = 1;
			before(() => {
				const linkedList = new LinkedList();
				linkedList.addFirst(new Node(1));
				actual = linkedList.count;
			});
			it('should return a count of one', () => assert.equal(actual, expected));
		});

		describe('addLast(node),', () => {
			let actual;
			const expected = 1;
			before(() => {
				const linkedList = new LinkedList();
				linkedList.addLast(new Node(1));
				actual = linkedList.count;
			});
			it('should return a count of one', () => assert.equal(actual, expected));
		});

		describe('removeFirst(),', () => {
			let actual;
			const expected = 0;
			before(() => {
				linkedList.removeFirst();
				actual = linkedList.count;
			});
			it('should return a count of zero', () => assert.equal(actual, expected));
		});

		describe('removeLast(),', () => {
			let actual;
			const expected = 0;
			before(() => {
				linkedList.removeLast();
				actual = linkedList.count;
			});
			it('should return a count of zero', () => assert.equal(actual, expected));
		});
	});
});