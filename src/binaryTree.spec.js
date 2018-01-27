'use strict';

const BinaryTree = require('./binaryTree');
const TreeNode = require('./treeNode');
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

		describe('insert(node),', () => {
			describe('.count,', () => {
				it('should return a count of one', () => {
					const actual = new BinaryTree().insert(new TreeNode(0)).count;
					const expected = 1;
					assert.equal(actual, expected);
				});
			});
		});
	});
});