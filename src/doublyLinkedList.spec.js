'use strict'

const DoublyLinkedList = require('./doublyLinkedList');
const ListNode = require('./listNode');
const assert = require('assert');

describe('A DoublyLinkedList,', () => {
	describe('with no items,', () => { 
		const linkedList = new DoublyLinkedList();
		
		describe('.count,', () => {
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

		describe('addFirst(nodeA),', () => {
			const linkedList = new DoublyLinkedList();
			const nodeA = new ListNode(1);
			linkedList.addFirst(nodeA);

			describe('.count,', () => {
				const actual = linkedList.count;
				const expected = 1;
				it('should return a count of one', () => assert.equal(actual, expected));
			});

			describe('addFirst(nodeB),', () => {
				const nodeB = new ListNode(2);
				linkedList.addFirst(nodeB);

				describe('nodeB.next,', () => {
					const actual = nodeB.next;
					const expected = nodeA;
					it('should be nodeA', () => assert.equal(actual, expected));
				});

				describe('nodeA.previous,', () => {
					const actual = nodeA.previous;
					const expected = nodeB;
					it('should be nodeB', () => assert.equal(actual, expected));
				});
			});
		});

		describe('addLast(nodeA),', () => {
			const linkedList = new DoublyLinkedList();
			const nodeA = new ListNode(1);
			linkedList.addLast(nodeA);
			
			describe('.count,', () => {
				const actual = linkedList.count;
				const expected = 1;
				it('should return a count of one', () => assert.equal(actual, expected));
			});

			describe('addLast(nodeB),', () => {
				const nodeB = new ListNode(2);
				linkedList.addLast(nodeB);

				describe('nodeA.next,', () => {
					const actual = nodeA.next;
					const expected = nodeB;
					it('should be nodeB', () => assert.equal(actual, expected));
				});

				describe('nodeB.previous,', () => {
					const actual = nodeB.previous;
					const expected = nodeA;
					it('should be nodeA', () => assert.equal(actual, expected));
				});
			});
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
		const nodeA = new ListNode('A');
		const nodeB = new ListNode('B');
		const nodeC = new ListNode('C');
		linkedList.addLast(nodeA);
		linkedList.addLast(nodeB);
		linkedList.addLast(nodeC);

		describe('.count,', () => {
			const actual = linkedList.count;
			const expected = 3;
			it('should have count of three', () => assert.equal(actual, expected));
		});

		describe('getFirst(),', () => {
			const firstNode = linkedList.getFirst();

			describe('.value,', ()=> {
				const actual = firstNode.value;
				const expected = 'A';
				it('should return the first Node\'s value', () => assert.equal(actual, expected));
			});

			describe('.next,', () => {
				const actual = firstNode.next;
				const expected = nodeB;
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
				const expected = 'C';
				it('should return the last Node\'s value', () => assert.equal(actual, expected));
			});

			describe('.next,', () => {
				const actual = lastNode.next;
				const expected = null;
				it('should be null', () => assert.equal(actual, expected));
			});

			describe('.previous,', () => {
				const actual = lastNode.previous;
				const expected = nodeB;
				it('should return the second Node', () => assert.equal(actual, expected));
			});
		});

		describe('removeFirst()', () => {
			linkedList.removeFirst();

			describe('count,', () => {
				const actual = linkedList.count;
				const expected = 2;
				it('should be one less', () => assert.equal(actual, expected));
			});

			xdescribe('getFirst(),', () => {
				const actual = linkedList.getFirst();
				const expected = nodeB;
				it('should return the new head node', () => assert.equal(actual, expected));
			});
		});
	});
});