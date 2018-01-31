'use strict';

const BinarySearchTree = require('./binarySearchTree');
const TreeNode = require('./treeNode');
const assert = require('assert');

describe('A BinarySearchTree', () => {

	let nodeZero, nodeOne, nodeTwo, nodeThree;
	beforeEach(() => {
		nodeZero = new TreeNode(0);
		nodeOne = new TreeNode(1);
		nodeTwo = new TreeNode(2);
		nodeThree = new TreeNode(3);
	});

	describe('with no items', () => {

		describe('.count', () => {
			it('should have count of zero', () => {
				const actual = new BinarySearchTree().count;
				const expected = 0;
				assert.equal(actual, expected);
			});
		});

		describe('insert(node)', () => {

			describe('.count', () => {
				it('should return a count of one', () => {
					const actual = new BinarySearchTree().insert(new TreeNode(1)).count;
					const expected = 1;
					assert.equal(actual, expected);
				});
			});

			describe('.root', () => {
				it('should return the root Node', () => {
					const nodeOne = new TreeNode(1);
					const actual = new BinarySearchTree(nodeOne).root;
					const expected = nodeOne;
					assert.equal(actual, expected);
				});
			});

			describe('insert(node) with a larger value', () => {
				
				describe('.root.right', () => {
					it('should return the larger value Node', () => {
						const actual = new BinarySearchTree(nodeOne, nodeTwo).root.right;
						const expected = nodeTwo;
						assert.equal(actual, expected);
					});
				});

				describe('.remove(node) with the larger value', () => {
					describe('.root.right', () => {
						it('should be null', () => {
							const actual = new BinarySearchTree(nodeOne, nodeTwo).remove(nodeTwo).root.right;
							const expected = null;
							assert.equal(actual, expected);
						});
					});
					describe('.count', () => {
						it('should be one less', () => {
							const actual = new BinarySearchTree(nodeOne, nodeTwo).remove(nodeTwo).count;
							const expected = 1;
							assert.equal(actual, expected);
						});
					});
				});
			});

			describe('insert(node) with a smaller value', () => {
				
				describe('.root.left', () => {
					it('should return the smaller value Node', () => {
						const actual = new BinarySearchTree(nodeOne, nodeZero).root.left;
						const expected = nodeZero;
						assert.equal(actual, expected);
					});
				});

				describe('.remove(node) with the smaller value', () => {
					describe('.root.left', () => {
						it('should be null', () => {
							const actual = new BinarySearchTree(nodeOne, nodeZero).remove(nodeZero).root.left;
							const expected = null;
							assert.equal(actual, expected);
						});
					});
					describe('.count', () => {
						it('should be one less', () => {
							const actual = new BinarySearchTree(nodeOne, nodeZero).remove(nodeZero).count;
							const expected = 1;
							assert.equal(actual, expected);
						});
					});
				});
			});

			describe('remove(node)', () => {
				describe('.root', () => {
					it('should be null', () => {
						const actual = new BinarySearchTree(nodeOne).remove(nodeOne).root;
						const expected = null;
						assert.equal(actual, expected);
					});
				});
			});
		});

		describe('remove(node)', () => {
			describe('.count', () => {
				it('should still be zero', () => {
					const actual = new BinarySearchTree().remove(nodeZero).count;
					const expected = 0;
					assert.equal(actual, expected);
				});
			});
		});
	});

	describe('with a mixture of items that should spread accross three levels', () => {

		//         (1)
		//   (0)          (2)
		//(-1) (0.5)  (1.5) (3)

		let nodeMinusOne, nodeHalf, nodeOneAndAHalf;
		beforeEach(() => {
			nodeMinusOne = new TreeNode(-1);
			nodeHalf = new TreeNode(0.5);
			nodeOneAndAHalf = new TreeNode(1.5);
		});

		describe('.root.left.left', () => {
			it('should return the Node with the smallest value', () => {
				const tree = new BinarySearchTree(nodeOne, nodeZero, nodeTwo, nodeMinusOne, nodeHalf, nodeTwo, nodeThree, nodeOneAndAHalf);
				const actual = tree.root.left.left;
				const expected = nodeMinusOne;
				assert.equal(actual, expected);
			});
		});

		describe('.root.left.right', () => {
			it('should return the Node with the second smallest value', () => {
				const tree = new BinarySearchTree(nodeOne, nodeZero, nodeTwo, nodeMinusOne, nodeHalf, nodeTwo, nodeThree, nodeOneAndAHalf);
				const actual = tree.root.left.right;
				const expected = nodeHalf;
				assert.equal(actual, expected);
			});
		});

		describe('.root.right.left', () => {
			it('should return the Node with the second largest value', () => {
				const tree = new BinarySearchTree(nodeOne, nodeZero, nodeTwo, nodeMinusOne, nodeHalf, nodeTwo, nodeThree, nodeOneAndAHalf);
				const actual = tree.root.right.left;
				const expected = nodeOneAndAHalf;
				assert.equal(actual, expected);
			});
		});

		describe('.root.right.right', () => {
			it('should return the Node with the largest value', () => {
				const tree = new BinarySearchTree(nodeOne, nodeZero, nodeTwo, nodeMinusOne, nodeHalf, nodeTwo, nodeThree, nodeOneAndAHalf);
				const actual = tree.root.right.right;
				const expected = nodeThree;
				assert.equal(actual, expected);
			});
		});

		describe('.remove() the smallest value', () => {
			describe('.root.left.left', () => {
				it('should be null', () => {
					const tree = new BinarySearchTree(nodeOne, nodeZero, nodeTwo, nodeMinusOne, nodeHalf, nodeTwo, nodeThree, nodeOneAndAHalf);
					const actual = tree.remove(nodeMinusOne).root.left.left;
					const expected = null;
					assert.equal(actual, expected);
				});
			});
		});

		describe('.remove() the largest value', () => {
			describe('.root.right.right', () => {
				it('should be null', () => {
					const tree = new BinarySearchTree(nodeOne, nodeZero, nodeTwo, nodeMinusOne, nodeHalf, nodeTwo, nodeThree, nodeOneAndAHalf);
					const actual = tree.remove(nodeThree).root.right.right;
					const expected = null;
					assert.equal(actual, expected);
				});
			});
		});
	});
});