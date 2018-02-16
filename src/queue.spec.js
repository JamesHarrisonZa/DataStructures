'use strict';

const Queue = require('./queue');
const assert = require('assert');

describe('A Queue', () => {

	describe('constructed with no items', () => {
		
		describe('.count', () => {
			
			it('should be Zero', () => {
				const actual = new Queue().count;
				const expected = 0;
				assert.equal(actual, expected);
			});
		});

		describe('.enqueue()', () => {
			describe('.count', () => {
				it('should have been increased by one', () => {
					const actual = new Queue().enqueue(1).count;
					const expected = 1;
					assert.equal(actual, expected);
				});
			});

			describe('.dequeue()', () => {
				describe('.value', () => {
					it('should be the value of the first item', () => {
						const actual = new Queue().enqueue(1).dequeue().value;
						const expected = 1;
						assert.equal(actual, expected);
					});
				});
				
				describe('.count', () => {
					it('should be one less', () => {
						const queue = new Queue().enqueue(1);
						const first = queue.dequeue();
						const actual = queue.count;
						const expected = 0;
						assert.equal(actual, expected);
					});
				});
			});
		});

		describe('.dequeue()', () => {
			it('should return null', () => {
				const actual = new Queue().dequeue();
				const expected = null;
				assert.equal(actual, expected);
			});

			it('should still have a count of zero', () => {
				const queue = new Queue();
				const first = queue.dequeue();
				const actual = queue.count;
				const expected = 0;
				assert.equal(actual, expected);
			});
		});
	});

	describe('constructed with multiple items', () => {
	
		describe('.count', () => {
			it('should match the number of items', () => {
				const actual = new Queue('A', 'B', 'C').count;
				const expected = 3;
				assert.equal(actual, expected);
			});
		});

		describe('.dequeue()', () => {
			describe('.value', () => {
				it('should return the value of the first item', () => {
					const actual = new Queue('A', 'B', 'C').dequeue().value;
					const expected = 'A';
					assert.equal(actual, expected);
				});
			});

			describe('.dequeue()', () => {
				describe('.value', () => {
					it('should return the value of the second item', () => {
						const queue = new Queue('A', 'B', 'C');
						queue.dequeue();
						const actual = queue.dequeue().value;
						const expected = 'B';
						assert.equal(actual, expected);
					});
				});
			});
		});

		describe('iterating over the Queue', () => {

			it('should dequeue all the items off the Queue', () => {
				const queue = new Queue('A', 'B', 'C');
				[...queue]
				const actual = queue.count;
				const expected = 0;
				assert.equal(actual, expected);
			});

			describe('for of', () => {
				it('should loop for every node', () => {
					const queue = new Queue('A', 'B', 'C');
					let loopCount = 0;
					for (const node of queue) {
						loopCount++;
					}
					const actual = loopCount;
					const expected = 3;
					assert.equal(actual, expected);
				});
			});

			describe('destructuring', () => {
				it('should create an array of the same length', () => {
					const queue = new Queue('A', 'B', 'C');
					const actual = [...queue].length;
					const expected = 3;
					assert.equal(actual, expected);
				});
			});
		});
	});
});