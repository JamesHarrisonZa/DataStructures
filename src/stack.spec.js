'use strict';

const Stack = require('./stack');
const assert = require('assert');

describe('A Stack', () => {

	describe('with no items', () => {
		
		describe('.count', () => {
			
			it('should be zero', () => {
				const actual = new Stack().count;
				const expected = 0;
				assert.equal(actual, expected);
			});
		});

		describe('.push()', () => {
		
			describe('.count', () => {
				it('should increase by one', () => {
					const actual = new Stack().push(1).count;
					const expected = 1;
					assert.equal(actual, expected);
				});
			});

			describe('.pop()', () => {
				it('should return a value', () => {
					const actual = new Stack().push(1).pop().value;
					const expected = 1;
					assert.equal(actual, expected);
				});
			});
		});

		describe('.pop()', () => {

			it('should return null', () => {
				const actual = new Stack().pop();
				const expected = null;
				assert.equal(actual, expected);
			});
		});

		describe('.peek()', () => {
			it('should return null', () => {
				const actual = new Stack().peek();
				const expected = null;
				assert.equal(actual, expected);
			});
		});
	});

	describe('with multiple items', () => {

		describe('.count', () => {
			it('should match the number of items', () => {
				const actual = new Stack(1, 2, 3).count;
				const expected = 3;
				assert.equal(actual, expected);
			});
		});

		describe('.peek()', () => {
			
			it('should return the first item', () => {
				const actual = new Stack(1, 2, 3).peek().value;
				const expected = 1;
				assert.equal(actual, expected);
			});

			it('should have the same count', () => {
				const stack = new Stack(1, 2, 3);
				stack.peek();
				const actual = stack.count;
				const expected = 3;
				assert.equal(actual, expected);
			});
		});

		describe('iterating over the Stack', () => {

			it('should pop all the items off the stack', () => {
				const stack = new Stack('A', 'B', 'C');
				[...stack]
				const actual = stack.count;
				const expected = 0;
				assert.equal(actual, expected);
			});

			describe('for of', () => {
				it('should loop for every node', () => {
					const stack = new Stack('A', 'B', 'C');
					let loopCount = 0;
					for (const node of stack) {
						loopCount++;
					}
					const actual = loopCount;
					const expected = 3;
					assert.equal(actual, expected);
				});
			});

			describe('destructuring', () => {
				it('should create an array of the same length', () => {
					const stack = new Stack('A', 'B', 'C');
					const actual = [...stack].length;
					const expected = 3;
					assert.equal(actual, expected);
				});
			});
		});
	});
});