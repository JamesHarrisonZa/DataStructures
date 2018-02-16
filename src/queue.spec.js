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
		});
	});
});