'use strict';

const BinaryTree = require('./binaryTree');
const TreeNode = require('./treeNode');
const assert = require('assert');

describe('A BinaryTree,', () => {

	let nodeZero, nodeOne, nodeTwo, nodeThree;
	beforeEach(() => {
		nodeZero = new TreeNode(0);
		nodeOne = new TreeNode(1);
		nodeTwo = new TreeNode(2);
		nodeThree = new TreeNode(3);
	});

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
					const actual = new BinaryTree().insert(new TreeNode(1)).count;
					const expected = 1;
					assert.equal(actual, expected);
				});
			});

			describe('.root,', () => {
				it('should return the root Node', () => {
					const nodeOne = new TreeNode(1);
					const actual = new BinaryTree(nodeOne).root;
					const expected = nodeOne;
					assert.equal(actual, expected);
				});
			});

			describe('insert(node) with a larger value,', () => {
				describe('.root.right,', () => {
					it('should return the larger value Node', () => {
						const actual = new BinaryTree(nodeOne, nodeTwo).root.right;
						const expected = nodeTwo;
						assert.equal(actual, expected);
					});
				});
			});

			describe('insert(node) with a smaller value,', () => {
				describe('.root.left,', () => {
					it('should return the smaller value Node', () => {
						const actual = new BinaryTree(nodeOne, nodeZero).root.left;
						const expected = nodeZero;
						assert.equal(actual, expected);
					});
				});
			});
		});
	});

	describe('with multiple items,', () => {

		describe('.count,', () => {
			it('should have count of three', () => {
				const actual = new BinaryTree(nodeOne, nodeTwo, nodeThree).count;
				const expected = 3;
				assert.equal(actual, expected);
			});
		});
	});
});