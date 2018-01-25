'use strict'

const LinkedList = require('./linkedList');
const Node = require('./node');
const assert = require('assert');

describe('A LinkedList,', () => {
	describe('with no items,', () => { 
		const linkedList = new LinkedList();
		
		describe('count(),', () => {
			const actual = linkedList.count;
			const expected = 0;
			it('should have count of zero', () => assert.equal(actual, expected));
		});

		describe('getFirst(),', () => {
			const actual = linkedList.getFirst();
			const expected = null;
			it('should return null', () => assert.equal(actual, expected));
		});

		describe('getLast(),', () => {
			const actual = linkedList.getLast();
			const expected = null;
			it('should return null', () => assert.equal(actual, expected));
		});

		describe('addFirst(node),', () => {
			const linkedList = new LinkedList();
			linkedList.addFirst(new Node(1));
			const actual = linkedList.count;
			const expected = 1;
			it('should return a count of one', () => assert.equal(actual, expected));
		});

		describe('addLast(node),', () => {
			const linkedList = new LinkedList();
			linkedList.addLast(new Node(1));
			const actual = linkedList.count;
			const expected = 1;
			it('should return a count of one', () => assert.equal(actual, expected));
		});

		describe('removeFirst(),', () => {
			linkedList.removeFirst();
			const actual = linkedList.count;
			const expected = 0;
			it('should return a count of zero', () => assert.equal(actual, expected));
		});

		describe('removeLast(),', () => {
			linkedList.removeLast();
			const actual = linkedList.count;
			const expected = 0;
			it('should return a count of zero', () => assert.equal(actual, expected));
		});
	});

	describe('with one item,', () => {
		const linkedList = new LinkedList();
		linkedList.addFirst(new Node(1));

		describe('count(),', () => {
			const actual = linkedList.count;
			const expected = 1;
			it('should have count of one', () => assert.equal(actual, expected));
		});

		describe('getFirst(),', () => {
			const actual = linkedList.getFirst().value;
			const expected = 1;
			it('should return the only Node', () => assert.equal(actual, expected));
		});

		describe('getLast(),', () => {
			const actual = linkedList.getLast().value;
			const expected = 1;
			it('should return the only Node', () => assert.equal(actual, expected));
		});
	});

	describe('with two items,', () => {
		const linkedList = new LinkedList();
		linkedList.addFirst(new Node(1));
		linkedList.addLast(new Node(2));

		describe('count(),', () => {
			let actual = linkedList.count;
			const expected = 2;
			it('should have count of two', () => assert.equal(actual, expected));
		});

		describe('getFirst(),', () => {
			let actual = linkedList.getFirst().value;
			const expected = 1;
			it('should return the first Node', () => assert.equal(actual, expected));
		});

		describe('getLast(),', () => {
			let actual = linkedList.getLast().value;
			const expected = 2;
			it('should return the last Node', () => assert.equal(actual, expected));
		});
	});
});