'use strict'

const DoublyLinkedList = require('./doublyLinkedList');
const ListNode = require('./listNode');
const assert = require('assert');

describe('A DoublyLinkedList,', () => {

	describe('with no items,', () => {

		describe('.count,', () => {

			it('should have count of zero', () => {
				const actual = new DoublyLinkedList().count;
				const expected = 0;
				assert.equal(actual, expected);
			});
		});

		describe('getFirst(),', () => {
			it('should return null', () => {
				const actual = new DoublyLinkedList().getFirst();
				const expected = null;
				assert.equal(actual, expected);
			});
		});

		describe('getLast(),', () => {
			it('should return null', () => {
				const actual = new DoublyLinkedList().getLast();
				const expected = null;
				assert.equal(actual, expected);
			});
		});

		describe('addFirst(nodeA),', () => {
			const nodeA = new ListNode('A');

			describe('.count,', () => {
				it('should return a count of one', () => {
					const actual = new DoublyLinkedList().addFirst(nodeA).count;
					const expected = 1;
					assert.equal(actual, expected);
				});
			});

			describe('getFirst(),', () => {
				describe('.value,', () => {
					it('should return nodeA\'s value', () => {
						const actual = new DoublyLinkedList().addFirst(nodeA).getFirst().value;
						const expected = nodeA.value;
						assert.equal(actual, expected);
					});
				});
			});

			describe('addFirst(nodeB),', () => {
				const nodeB = new ListNode('B');

				describe('nodeB.next,', () => {
					it('should be nodeA', () => {
						const linkedList = new DoublyLinkedList().addFirst(nodeA).addFirst(nodeB);
						const actual = nodeB.next;
						const expected = nodeA;
						assert.equal(actual, expected)
					});
				});

				describe('nodeA.previous,', () => {
					it('should be nodeB', () => {
						const linkedList = new DoublyLinkedList().addFirst(nodeA).addFirst(nodeB);
						const actual = nodeA.previous;
						const expected = nodeB;
						assert.equal(actual, expected)
					});
				});
			});
		});

		describe('addLast(nodeA),', () => {
			const nodeA = new ListNode('A');

			describe('.count,', () => {
				it('should return a count of one', () => {
					const actual = new DoublyLinkedList().addLast(nodeA).count;
					const expected = 1;
					assert.equal(actual, expected);
				});
			});

			describe('addLast(nodeB),', () => {
				const nodeB = new ListNode('B');

				describe('nodeA.next,', () => {
					it('should be nodeB', () => {
						const linkedList = new DoublyLinkedList().addLast(nodeA).addLast(nodeB);
						const actual = nodeA.next;
						const expected = nodeB;
						assert.equal(actual, expected);
					});
				});

				describe('nodeB.previous,', () => {
					it('should be nodeA', () => {
						const linkedList = new DoublyLinkedList().addLast(nodeA).addLast(nodeB);
						const actual = nodeB.previous;
						const expected = nodeA;
						assert.equal(actual, expected);
					});
				});
			});
		});

		describe('removeFirst(),', () => {

			it('should return a count of zero', () => {
				const actual = new DoublyLinkedList().removeFirst().count;
				const expected = 0;
				assert.equal(actual, expected);
			});
		});

		describe('removeLast(),', () => {
			it('should return a count of zero', () => {
				const actual = new DoublyLinkedList().removeLast().count;
				const expected = 0;
				assert.equal(actual, expected);
			});
		});
	});

	describe('with multiple items,', () => {

		let nodeA;
		let nodeB;
		let nodeC;

		beforeEach(() => {
			nodeA = new ListNode('A');
			nodeB = new ListNode('B');
			nodeC = new ListNode('C');
		});

		describe('.count,', () => {
			it('should have count of three', () => {
				const actual = new DoublyLinkedList(nodeA, nodeB, nodeC).count;
				const expected = 3;
				assert.equal(actual, expected);
			});
		});

		describe('getFirst(),', () => {

			describe('.value,', () => {
				it('should return the first Node\'s value', () => {
					const actual = new DoublyLinkedList(nodeA, nodeB, nodeC).getFirst().value;
					const expected = 'A';
					assert.equal(actual, expected);
				});
			});

			describe('.next,', () => {
				it('should return the second Node', () => {
					const actual = new DoublyLinkedList(nodeA, nodeB, nodeC).getFirst().next;
					const expected = nodeB;
					assert.equal(actual, expected);
				});
			});

			describe('.previous,', () => {
				it('should be null', () => {
					const actual = new DoublyLinkedList(nodeA, nodeB, nodeC).getFirst().previous;
					const expected = null;
					assert.equal(actual, expected);
				});
			});
		});

		describe('getLast(),', () => {

			describe('.value,', () => {
				it('should return the last Node\'s value', () => {
					const actual = new DoublyLinkedList(nodeA, nodeB, nodeC).getLast().value;
					const expected = 'C';
					assert.equal(actual, expected);
				});
			});

			describe('.next,', () => {
				it('should be null', () => {
					const actual = new DoublyLinkedList(nodeA, nodeB, nodeC).getLast().next;
					const expected = null;
					assert.equal(actual, expected);
				});
			});

			describe('.previous,', () => {
				it('should return the second Node', () => {
					const actual = new DoublyLinkedList(nodeA, nodeB, nodeC).getLast().previous;
					const expected = nodeB;
					assert.equal(actual, expected);
				});
			});
		});

		describe('removeFirst(),', () => {

			describe('count,', () => {
				it('should be one less', () => {
					const actual = new DoublyLinkedList(nodeA, nodeB, nodeC).removeFirst().count;
					const expected = 2;
					assert.equal(actual, expected);
				});
			});

			describe('getFirst(),', () => {
				it('should return the new head node', () => {
					const actual = new DoublyLinkedList(nodeA, nodeB, nodeC).removeFirst().getFirst();
					const expected = nodeB;
					assert.equal(actual, expected);
				});

				describe('.previous,', () => {
					it('should be null', () => {
						const actual = new DoublyLinkedList(nodeA, nodeB, nodeC).removeLast().getFirst().previous;
						const expected = null;
						assert.equal(actual, expected);
					});
				});
			});
		});

		describe('removeLast(),', () => {

			describe('count,', () => {
				it('should be one less', () => {
					const actual = new DoublyLinkedList(nodeA, nodeB, nodeC).removeLast().count;
					const expected = 2;
					assert.equal(actual, expected);
				});
			});

			describe('getLast(),', () => {
				it('should return new last node', () => {
					const actual = new DoublyLinkedList(nodeA, nodeB, nodeC).removeLast().getLast();
					const expected = nodeB;
					assert.equal(actual, expected);
				});

				describe('.next,', () => {
					it('should be null', () => {
						const actual = new DoublyLinkedList(nodeA, nodeB, nodeC).removeLast().getLast().next;
						const expected = null;
						assert.equal(actual, expected);
					});
				});
			});
		});

		describe('iterating over the list,', () => {

			it('should loop for every node', () => {
				const linkedList = new DoublyLinkedList(nodeA, nodeB, nodeC);
				let loopCount = 0;
				for (const node of linkedList) {
					loopCount ++;
				}
				const actual = loopCount;
				const expected = linkedList.count;
				assert.equal(actual, expected);
			});
		});
	});
});