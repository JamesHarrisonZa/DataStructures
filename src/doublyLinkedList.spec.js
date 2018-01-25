'use strict'

const DoublyLinkedList = require('./doublyLinkedList');
const ListNode = require('./listNode');
const assert = require('assert');

describe('A DoublyLinkedList,', () => {
	describe('with no items,', () => { 
		const linkedList = new DoublyLinkedList();
		
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
			const linkedList = new DoublyLinkedList();
			linkedList.addFirst(new ListNode(1));
			const actual = linkedList.count;
			const expected = 1;
			it('should return a count of one', () => assert.equal(actual, expected));
		});

		describe('addLast(node),', () => {
			const linkedList = new DoublyLinkedList();
			linkedList.addLast(new ListNode(1));
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

	describe('with multiple items,', () => {
		const linkedList = new DoublyLinkedList();
		const actualFirstNode = new ListNode(1);
		const actualSecondNode = new ListNode(2);
		const actualThirdNode = new ListNode(3);
		linkedList.addFirst(actualThirdNode);
		linkedList.addFirst(actualSecondNode);
		linkedList.addFirst(actualFirstNode);

		describe('count(),', () => {
			const actual = linkedList.count;
			const expected = 3;
			it('should have count of three', () => assert.equal(actual, expected));
		});

		describe('getFirst(),', () => {
			const firstNode = linkedList.getFirst();

			describe('.value,', ()=> {
				const actual = firstNode.value;
				const expected = 1;
				it('should return the first Node\'s value', () => assert.equal(actual, expected));
			});

			describe('.next,', () => {
				const actual = firstNode.next;
				const expected = actualSecondNode;
				it('should return the second Node', () => assert.equal(actual, expected));
			});

			describe('.previous,', () => {
				const actual = firstNode.previous;
				const expected = null;
				it('should be null', () => assert.equal(actual, expected));
			});
		});

		describe('getLast(),', () => {
			const lastNode = linkedList.getLast();

			describe('.value,', () => {
				const actual = lastNode.value;
				const expected = 3;
				it('should return the last Node\'s value', () => assert.equal(actual, expected));
			});

			describe('.next,', () => {
				const actual = lastNode.next;
				const expected = null;
				it('should be null', () => assert.equal(actual, expected));
			});

			describe('.previous,', () => {
				const actual = lastNode.previous;
				const expected = actualSecondNode;
				it('should return the second Node', () => assert.equal(actual, expected));
			});
		});
	});
});