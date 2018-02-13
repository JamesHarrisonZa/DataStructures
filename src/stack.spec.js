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
	});

	describe('with multiple items', () => {

		describe('.count', () => {

			it('should match the number of items', () => {
				const actual = new Stack(1, 2, 3).count;
				const expected = 3;
				assert.equal(actual, expected);
			});
		});
	});
});