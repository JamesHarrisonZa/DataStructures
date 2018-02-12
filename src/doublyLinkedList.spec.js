'use strict';

const DoublyLinkedList = require('./doublyLinkedList');
const ListNode = require('./listNode');
const assert = require('assert');

describe('A DoublyLinkedList', () => {

	describe('with no items', () => {

		describe('.count', () => {

			it('should have count of zero', () => {
				const actual = new DoublyLinkedList().count;
				const expected = 0;
				assert.equal(actual, expected);
			});
		});

		describe('.getFirst()', () => {
			it('should return null', () => {
				const actual = new DoublyLinkedList().getFirst();
				const expected = null;
				assert.equal(actual, expected);
			});
		});

		describe('.getLast()', () => {
			it('should return null', () => {
				const actual = new DoublyLinkedList().getLast();
				const expected = null;
				assert.equal(actual, expected);
			});
		});

		describe('.addFirst("A")', () => {

			describe('.count', () => {
				it('should return a count of one', () => {
					const actual = new DoublyLinkedList().addFirst('A').count;
					const expected = 1;
					assert.equal(actual, expected);
				});
			});

			describe('.getFirst()', () => {
				describe('.value', () => {
					it('should return the correct value', () => {
						const actual = new DoublyLinkedList().addFirst('A').getFirst().value;
						const expected = 'A';
						assert.equal(actual, expected);
					});
				});
			});

			describe('.addFirst("B")', () => {

				describe('.getFirst().next.value', () => {
					it('should be "A"', () => {
						const linkedList = new DoublyLinkedList().addFirst('A').addFirst('B');
						const actual = linkedList.getFirst().next.value;
						const expected = 'A';
						assert.equal(actual, expected)
					});
				});

				describe('.getLast().previous.value', () => {
					it('should be "B"', () => {
						const linkedList = new DoublyLinkedList().addFirst('A').addFirst('B');
						const actual = linkedList.getLast().previous.value;
						const expected = 'B';
						assert.equal(actual, expected)
					});
				});
			});
		});

		describe('addLast("A")', () => {

			describe('.count', () => {
				it('should return a count of one', () => {
					const actual = new DoublyLinkedList().addLast('A').count;
					const expected = 1;
					assert.equal(actual, expected);
				});
			});

			describe('addLast("B")', () => {

				describe('.getFirst().next.value', () => {
					it('should be "B"', () => {
						const linkedList = new DoublyLinkedList().addLast('A').addLast('B');
						const actual = linkedList.getFirst().next.value;
						const expected = 'B';
						assert.equal(actual, expected);
					});
				});

				describe('.getLast().previous.value', () => {
					it('should be "A"', () => {
						const linkedList = new DoublyLinkedList().addLast('A').addLast('B');
						const actual = linkedList.getLast().previous.value;
						const expected = 'A';
						assert.equal(actual, expected);
					});
				});
			});
		});

		describe('.removeFirst()', () => {

			it('should return a count of zero', () => {
				const actual = new DoublyLinkedList().removeFirst().count;
				const expected = 0;
				assert.equal(actual, expected);
			});
		});

		describe('.removeLast()', () => {
			it('should return a count of zero', () => {
				const actual = new DoublyLinkedList().removeLast().count;
				const expected = 0;
				assert.equal(actual, expected);
			});
		});
	});

	describe('with multiple items', () => {

		describe('.count', () => {
			it('should have count of three', () => {
				const actual = new DoublyLinkedList('A', 'B', 'C').count;
				const expected = 3;
				assert.equal(actual, expected);
			});
		});

		describe('.getFirst()', () => {

			describe('.value', () => {
				it('should return the first Node\'s value', () => {
					const actual = new DoublyLinkedList('A', 'B', 'C').getFirst().value;
					const expected = 'A';
					assert.equal(actual, expected);
				});
			});

			describe('.next.value', () => {
				it('should return the value of the second Node', () => {
					const actual = new DoublyLinkedList('A', 'B', 'C').getFirst().next.value;
					const expected = 'B';
					assert.equal(actual, expected);
				});
			});

			describe('.previous', () => {
				it('should be null', () => {
					const actual = new DoublyLinkedList('A', 'B', 'C').getFirst().previous;
					const expected = null;
					assert.equal(actual, expected);
				});
			});
		});

		describe('getLast()', () => {

			describe('.value', () => {
				it('should return the last Node\'s value', () => {
					const actual = new DoublyLinkedList('A', 'B', 'C').getLast().value;
					const expected = 'C';
					assert.equal(actual, expected);
				});
			});

			describe('.next', () => {
				it('should be null', () => {
					const actual = new DoublyLinkedList('A', 'B', 'C').getLast().next;
					const expected = null;
					assert.equal(actual, expected);
				});
			});

			describe('.previous.value', () => {
				it('should return the value of the second Node', () => {
					const actual = new DoublyLinkedList('A', 'B', 'C').getLast().previous.value;
					const expected = 'B';
					assert.equal(actual, expected);
				});
			});
		});

		describe('removeFirst()', () => {

			describe('count', () => {
				it('should be one less', () => {
					const actual = new DoublyLinkedList('A', 'B', 'C').removeFirst().count;
					const expected = 2;
					assert.equal(actual, expected);
				});
			});

			describe('getFirst()', () => {
				describe('.value', () => {
					it('should return the new head node\'s value', () => {
						const actual = new DoublyLinkedList('A', 'B', 'C').removeFirst().getFirst().value;
						const expected = 'B';
						assert.equal(actual, expected);
					});
				});

				describe('.previous', () => {
					it('should be null', () => {
						const actual = new DoublyLinkedList('A', 'B', 'C').removeLast().getFirst().previous;
						const expected = null;
						assert.equal(actual, expected);
					});
				});
			});
		});

		describe('removeLast()', () => {

			describe('count', () => {
				it('should be one less', () => {
					const actual = new DoublyLinkedList('A', 'B', 'C').removeLast().count;
					const expected = 2;
					assert.equal(actual, expected);
				});
			});

			describe('getLast()', () => {
				describe('.value', () => {
					it('should return new last node\'s value', () => {
						const actual = new DoublyLinkedList('A', 'B', 'C').removeLast().getLast().value;
						const expected = 'B';
						assert.equal(actual, expected);
					});
				});

				describe('.next', () => {
					it('should be null', () => {
						const actual = new DoublyLinkedList('A', 'B', 'C').removeLast().getLast().next;
						const expected = null;
						assert.equal(actual, expected);
					});
				});
			});
		});

		describe('iterating over the list', () => {

			describe('for of', () => {
				it('should loop for every node', () => {
					const linkedList = new DoublyLinkedList('A', 'B', 'C');
					let loopCount = 0;
					for (const node of linkedList) {
						loopCount++;
					}
					const actual = loopCount;
					const expected = linkedList.count;
					assert.equal(actual, expected);
				});
			});
			
			describe('destructuring', () => {
				it('should create an array of the same length', () => {
					const linkedList = new DoublyLinkedList('A', 'B', 'C');
					const actual = [...linkedList].length;
					const expected = linkedList.count;
					assert.equal(actual, expected);
				});
			});
		});
	});
});