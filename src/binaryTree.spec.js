'use strict';

const BinaryTree = require('./binaryTree');
const assert = require('assert');

describe('A BinaryTree,', () => {

	describe('with no items,', () => {

		describe('.count,', () => {
			it('should have count of zero', () => {
				const actual = new BinaryTree().count;
				const expected = 0;
				assert.equal(actual, expected);
			});
		});
	});
});