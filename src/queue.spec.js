'use strict';

const Queue = require('./queue');
const assert = require('assert');

describe('A Queue', () => {

	describe('with no items', () => {
		
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
});