'use strict';

const BinarySearchTree = require('./binarySearchTree');
const TreeNode = require('./treeNode');
const assert = require('assert');

describe('A BinarySearchTree', () => {

	describe('with no items', () => {

		describe('.count', () => {
			it('should have count of zero', () => {
				const actual = new BinarySearchTree().count;
				const expected = 0;
				assert.equal(actual, expected);
			});
		});

		describe('insert()', () => {

			describe('.count', () => {
				it('should return a count of one', () => {
					const actual = new BinarySearchTree().insert(1).count;
					const expected = 1;
					assert.equal(actual, expected);
				});
			});

			describe('.root', () => {
				it('should return the root Node', () => {
					const actual = new BinarySearchTree(1).root.value;
					const expected = 1;
					assert.equal(actual, expected);
				});
			});

			describe('insert() with a larger value', () => {
				
				describe('.root.right', () => {
					it('should return the larger value Node', () => {
						const actual = new BinarySearchTree(1, 2).root.right.value;
						const expected = 2;
						assert.equal(actual, expected);
					});
				});

				describe('.remove() with the larger value', () => {
					describe('.root.right', () => {
						it('should be null', () => {
							const actual = new BinarySearchTree(1, 2).remove(2).root.right;
							const expected = null;
							assert.equal(actual, expected);
						});
					});
					describe('.count', () => {
						it('should be one less', () => {
							const actual = new BinarySearchTree(1, 2).remove(2).count;
							const expected = 1;
							assert.equal(actual, expected);
						});
					});
				});
			});

			describe('insert() with a smaller value', () => {
				
				describe('.root.left', () => {
					it('should return the smaller value Node', () => {
						const actual = new BinarySearchTree(1, 0).root.left.value;
						const expected = 0;
						assert.equal(actual, expected);
					});
				});

				describe('.remove() with the smaller value', () => {
					describe('.root.left', () => {
						it('should be null', () => {
							const actual = new BinarySearchTree(1, 0).remove(0).root.left;
							const expected = null;
							assert.equal(actual, expected);
						});
					});
					describe('.count', () => {
						it('should be one less', () => {
							const actual = new BinarySearchTree(1, 0).remove(0).count;
							const expected = 1;
							assert.equal(actual, expected);
						});
					});
				});
			});

			describe('remove()', () => {
				describe('.root', () => {
					it('should be null', () => {
						const actual = new BinarySearchTree(1).remove(1).root;
						const expected = null;
						assert.equal(actual, expected);
					});
				});
			});
		});

		describe('remove()', () => {
			describe('.count', () => {
				it('should still be zero', () => {
					const actual = new BinarySearchTree().remove(0).count;
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

		describe('.count', () => {
			it('should match the number of items', () => {
				const actual = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).count;
				const expected = 7;
				assert.equal(actual, expected);
			});
		});

		describe('.root.left.left', () => {
			it('should return the Node with the smallest value', () => {
				const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
				const actual = tree.root.left.left.value;
				const expected = -1;
				assert.equal(actual, expected);
			});
		});

		describe('.root.left.right', () => {
			it('should return the Node with the second smallest value', () => {
				const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
				const actual = tree.root.left.right.value;
				const expected = 0.5;
				assert.equal(actual, expected);
			});
		});

		describe('.root.right.left', () => {
			it('should return the Node with the second largest value', () => {
				const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
				const actual = tree.root.right.left.value;
				const expected = 1.5;
				assert.equal(actual, expected);
			});
		});

		describe('.root.right.right', () => {
			it('should return the Node with the largest value', () => {
				const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
				const actual = tree.root.right.right.value;
				const expected = 3;
				assert.equal(actual, expected);
			});
		});

		describe('.remove() the smallest value', () => {
			describe('.root.left.left', () => {
				it('should be null', () => {
					const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
					const actual = tree.remove(-1).root.left.left;
					const expected = null;
					assert.equal(actual, expected);
				});
			});
			describe('.count', () => {
				it('should be one less', () => {
					const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
					const actual = tree.remove(-1).count;
					const expected = 6;
					assert.equal(actual, expected);
				});
			});
		});

		describe('.remove() the second smallest value', () => {
			describe('.root.left.right', () => {
				it('should be null', () => {
					const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
					const actual = tree.remove(0.5).root.left.right;
					const expected = null;
					assert.equal(actual, expected);
				});
			});
			describe('.count', () => {
				it('should be one less', () => {
					const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
					const actual = tree.remove(0.5).count;
					const expected = 6;
					assert.equal(actual, expected);
				});
			});
		});

		describe('.remove() the second largest value', () => {
			describe('.root.right.left', () => {
				it('should be null', () => {
					const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
					const actual = tree.remove(1.5).root.right.left;
					const expected = null;
					assert.equal(actual, expected);
				});
			});
			describe('.count', () => {
				it('should be one less', () => {
					const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
					const actual = tree.remove(1.5).count;
					const expected = 6;
					assert.equal(actual, expected);
				});
			});
		});

		describe('.remove() the largest value', () => {
			describe('.root.right.right', () => {
				it('should be null', () => {
					const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
					const actual = tree.remove(3).root.right.right;
					const expected = null;
					assert.equal(actual, expected);
				});
			});
			describe('.count', () => {
				it('should be one less', () => {
					const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
					const actual = tree.remove(3).count;
					const expected = 6;
					assert.equal(actual, expected);
				});
			});
		});

		describe('.remove() a value that doesnt exist', () => {
			describe('.count', () => {
				it('should remain unchanged', () => {
					const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
					const actual = tree.remove(42).count;
					const expected = 7;
					assert.equal(actual, expected);
				});
			});
		});

		describe('.insert() a value that exists already', () => {
			describe('.count', () => {
				it('should remain unchanged', () => {
					const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
					const actual = tree.insert(1).count;
					const expected = 7;
					assert.equal(actual, expected);
				});
			});
		});

		describe('.remove() a value from the second level right', () => {
			it('should move one of the leaf nodes up a level', () => {
				const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).remove(2);
				const actual = tree.root.right.value;
				const expected = 3;
				assert.equal(actual, expected);
			});
		});

		describe.only('.remove() a value from the second level left', () => {
			it('should move one of the leaf nodes up a level', () => {
				const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).remove(0);
				const actual = tree.root.left.value;
				const expected = 0.5;
				assert.equal(actual, expected);
			});
		});
	});
});