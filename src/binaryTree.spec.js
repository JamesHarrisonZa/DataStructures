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
					const actual = new BinaryTree().insert(new TreeNode('A')).count;
					const expected = 1;
					assert.equal(actual, expected);
				});
			});
		});
	});

	describe('with multiple items,', () => {

		let nodeA;
		let nodeB;
		let nodeC;

		beforeEach(() => {
			nodeA = new TreeNode('A');
			nodeB = new TreeNode('B');
			nodeC = new TreeNode('C');
		});

		describe('.count,', () => {
			it('should have count of three', () => {
				const actual = new BinaryTree(nodeA, nodeB, nodeC).count;
				const expected = 3;
				assert.equal(actual, expected);
			});
		});

		describe('.root,', () => {
			it('should return the root Node', () => {
				const actual = new BinaryTree(nodeA, nodeB, nodeC).root;
				const expected = nodeA;
				assert.equal(actual, expected);
			});
		});
	});
});