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

		describe('.insert()', () => {
			describe('a value', () => {
				
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

				describe('.contains()', () => {
					describe('that value', () => {
						it('should return true', () => {
							const actual = new BinarySearchTree().insert(1).contains(1);
							const expected = true;
							assert.equal(actual, expected);
						});
					});
				});

				describe('.insert()', () => {
					describe('a larger value', () => {
					
						describe('.root.right', () => {
							it('should return the larger value Node', () => {
								const actual = new BinarySearchTree(1, 2).root.right.value;
								const expected = 2;
								assert.equal(actual, expected);
							});
						});

						describe('.contains()', () => {
							describe('that larger value', () => {
								it('should return true', () => {
									const actual = new BinarySearchTree(1, 2).contains(2);
									const expected = true;
									assert.equal(actual, expected);
								});
							});
						});

						describe('.remove()', () => {
							describe('with the larger value', () => {

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

						describe('.insert()', () => {
							describe('a smaller value', () => {
								describe('.remove', () => {
									describe('the root value', () => {
										describe('.root.value', () => {
											it('should be the "next biggest, ie the right child of the old root"', () => {
												const actual = new BinarySearchTree(1, 2, 0).remove(1).root.value;;
												const expected = 2;
												assert.equal(actual, expected);
											});
										});
									});
								});
							});
						});
					});
				});

				describe('.insert()', () => {
					describe('a smaller value', () => {
					
						describe('.root.left', () => {
							it('should return the smaller value Node', () => {
								const actual = new BinarySearchTree(1, 0).root.left.value;
								const expected = 0;
								assert.equal(actual, expected);
							});
						});

						describe('.contains()', () => {
							describe('that smaller value', () => {
								it('should return true', () => {
									const actual = new BinarySearchTree(1, 0).contains(0);
									const expected = true;
									assert.equal(actual, expected);
								});
							});
						});

						describe('.remove()', () => {

							describe('the smaller value', () => {
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

							describe('the root value', () => {
								describe('.root.value', () => {
									it('should be the left child of the old root', () => {
										const actual = new BinarySearchTree(1, 0).remove(1).root.value;
										const expected = 0;
										assert.equal(actual, expected);
									});
								});
							});
						});
					});
				});

				describe('.remove()', () => {
					describe('the root value', () => {
						describe('.root', () => {
							it('should be null', () => {
								const actual = new BinarySearchTree(1).remove(1).root;
								const expected = null;
								assert.equal(actual, expected);
							});
						});
					});
				});
			});
		});

		describe('.remove()', () => {
			describe('.count', () => {
				it('should still be zero', () => {
					const actual = new BinarySearchTree().remove(0).count;
					const expected = 0;
					assert.equal(actual, expected);
				});
			});
		});

		describe('.contains()', () => {
			describe('any value', () => {
				it('should return false', () => {
					const actual = new BinarySearchTree().contains(42);
					const expected = false;
					assert.equal(actual, expected);
				});
			});
		});

		describe('.getNode()', () => {
			describe('any value', () => {
				it('should return null', () => {
					const actual = new BinarySearchTree().getNode(42);
					const expected = null;
					assert.deepStrictEqual(actual, expected);
				});
			});
		});

		describe('.toArrayInorder()', () => {

			it('should return an empty array', () => {
				const actual = new BinarySearchTree().toArrayInorder();
				const expected = [];
				assert.deepEqual(actual, expected);
			});
		});

		describe('.toArrayPreorder()', () => {

			it('should return an empty array', () => {
				const actual = new BinarySearchTree().toArrayPreorder();
				const expected = [];
				assert.deepEqual(actual, expected);
			});
		});

		describe('.toArrayPostorder()', () => {

			it('should return an empty array', () => {
				const actual = new BinarySearchTree().toArrayPostorder();
				const expected = [];
				assert.deepEqual(actual, expected);
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

		describe('.insert()', () => {
			describe('a value that exists already', () => {
				describe('.count', () => {
					it('should remain unchanged', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
						const actual = tree.insert(1).count;
						const expected = 7;
						assert.equal(actual, expected);
					});
				});
			});
		});

		describe('.remove()', () => {

			describe('a value that doesnt exist', () => {
				describe('right', () => {
					describe('.count', () => {
						it('should remain unchanged', () => {
							const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
							const actual = tree.remove(42).count;
							const expected = 7;
							assert.equal(actual, expected);
						});
					});
				});

				describe('left', () => {
					describe('.count', () => {
						it('should remain unchanged', () => {
							const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
							const actual = tree.remove(-42).count;
							const expected = 7;
							assert.equal(actual, expected);
						});
					});
				});
			});

			describe('a value with no children', () => {

				describe('removing the smallest value', () => {
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

				describe('removing the second smallest value', () => {
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

				describe('removing the second largest value', () => {
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

				describe('removing the largest value', () => {
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
			});

			describe('a value with one child', () => {

				describe('left of the root', () => {
					it('should change the parent’s reference to the node’s child', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).remove(0.5);
						const actual = tree.remove(0).root.left.value;
						const expected = -1;
						assert.equal(actual, expected);
					});
				});

				describe('right of the root', () => {
					it('should change the parent’s reference to the node’s child', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).remove(3);
						const actual = tree.remove(2).root.right.value;
						const expected = 1.5;
						assert.equal(actual, expected);
					});
				});
			});

			describe('a value with two children', () => {

				describe('right of the root at level 2', () => {
					it('should change the parent’s reference  to the "next biggest"', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
						const actual = tree.remove(2).root.right.value;
						const expected = 3;
						assert.equal(actual, expected);
					});
				});

				describe('left of the root at level 2', () => {
					it('should change the parent’s reference  to the "next biggest"', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5);
						const actual = tree.remove(0).root.left.value;
						const expected = 0.5;
						assert.equal(actual, expected);
					});
				});

				describe('right of the root, has a right tree with a left node', () => {
					it('should change the parent’s reference  to the "next biggest"', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).insert(2.5);
						const actual = tree.remove(2).root.right.value;
						const expected = 2.5;
						assert.equal(actual, expected);
					});
				});

				describe('left of the root, has a right tree with a left node', () => {
					it('should change the parent’s reference  to the "next biggest"', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).insert(0.2);
						const actual = tree.remove(0).root.left.value;
						const expected = 0.2;
						assert.equal(actual, expected);
					});
				});

				describe('right of the root, has a right tree with multiple left nodes', () => {

					//                       remove(2)
					//         (1)               =>          (1)         
					//   (0)          (2)        =>    (0)         (2.2)
					//(-1) (0.5)  (1.5) (3)      => (-1) (0.5)  (1.5) (3)
					//                (2.5)      =>                 (2.5)
					//               (2.2)       =>                      

					it('should change the parent’s reference  to the "next biggest"', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).insert(2.5).insert(2.2);
						const actual = tree.remove(2).root.right.value;
						const expected = 2.2;
						assert.equal(actual, expected);
					});

					it('should update the swapped nodes .left', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).insert(2.5).insert(2.2);
						const actual = tree.remove(2).root.right.left.value;
						const expected = 1.5;
						assert.equal(actual, expected);
					});

					it('should update the swapped nodes .right', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).insert(2.5).insert(2.2);
						const actual = tree.remove(2).root.right.right.value;
						const expected = 3;
						assert.equal(actual, expected);
					});

					it('should update the node that was referencing the swapped node', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).insert(2.5).insert(2.2);
						const actual = tree.remove(2).root.right.right.left.left;
						const expected = null;
						assert.equal(actual, expected);
					});
				});

				describe('left of the root, has a right tree with multiple left nodes', () => {

					//                       remove(0)
					//         (1)               =>          (1)         
					//   (0)          (2)        =>    (0.1)        (2)
					//(-1) (0.5)  (1.5) (3)      => (-1) (0.5)  (1.5) (3)
					//    (0.2)                  =>     (0.2)            
					//   (0.1)                   =>                      

					it('should change the parent’s reference  to the "next biggest"', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).insert(0.2).insert(0.1);
						const actual = tree.remove(0).root.left.value;
						const expected = 0.1;
						assert.equal(actual, expected);
					});

					it('should update the swapped nodes .left', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).insert(0.2).insert(0.1);
						const actual = tree.remove(0).root.left.left.value;
						const expected = -1;
						assert.equal(actual, expected);
					});

					it('should update the swapped nodes .right', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).insert(0.2).insert(0.1);
						const actual = tree.remove(0).root.left.right.value;
						const expected = 0.5;
						assert.equal(actual, expected);
					});

					it('should update the node that was referencing the swapped node', () => {
						const tree = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).insert(0.2).insert(0.1);
						const actual = tree.remove(0).root.left.right.left.left;
						const expected = null;
						assert.equal(actual, expected);
					});
				});
			});

			describe('a value at the root of the tree', () => {
				describe('.root', () => {
					describe('.value', () => {
						it('should be the new root', () => {
							const actual = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).remove(1).root.value;
							const expected = 1.5;
							assert.equal(actual, expected);
						});
					});

					describe('.left.value', () => {
						it('should be unchanged', () => {
							const actual = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).remove(1).root.left.value;
							const expected = 0;
							assert.equal(actual, expected);
						});
					});
					
					describe('.right.value', () => {
						it('should be unchanged', () => {
							const actual = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).remove(1).root.right.value;
							const expected = 2;
							assert.equal(actual, expected);
						});
					});
				});
			});
		});

		describe('.contains()', () => {

			describe('a value that doesnt exist', () => {
				it('should return false', () => {
					const actual = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).contains(42);
					const expected = false;
					assert.equal(actual, expected);
				});
			});

			describe('a value that does exist', () => {
				it('should return true', () => {
					const actual = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).contains(3);
					const expected = true;
					assert.equal(actual, expected);
				});
			});
		});

		describe('.getNode()', () => {

			describe('a value that doesnt exist', () => {
				it('should return null', () => {
					const actual = new BinarySearchTree(1, 0, 2).getNode(42);
					const expected = null;
					assert.equal(actual, expected);
				});
			});

			describe('a value which is a leaf node', () => {
				
				describe('.value', () => {
					it('should match', () => {
						const actual = new BinarySearchTree(1, 0, 2).getNode(2).value;
						const expected = 2;
						assert.equal(actual, expected);
					});
				});
				describe('.left', () => {
					it('should be null', () => {
						const actual = new BinarySearchTree(1, 0, 2).getNode(2).left;
						const expected = null;
						assert.equal(actual, expected);
					});
				});
				describe('.right', () => {
					it('should be null', () => {
						const actual = new BinarySearchTree(1, 0, 2).getNode(2).right;
						const expected = null;
						assert.equal(actual, expected);
					});
				});
			});

			describe('a value which is at the root', () => {

				describe('.value', () => {
					it('should match', () => {
						const actual = new BinarySearchTree(1, 0, 2).getNode(1).value;
						const expected = 1;
						assert.equal(actual, expected);
					});
				});
				describe('.left.value', () => {
					it('should be null', () => {
						const actual = new BinarySearchTree(1, 0, 2).getNode(1).left.value;
						const expected = 0;
						assert.equal(actual, expected);
					});
				});
				describe('.right.value', () => {
					it('should be null', () => {
						const actual = new BinarySearchTree(1, 0, 2).getNode(1).right.value;
						const expected = 2;
						assert.equal(actual, expected);
					});
				});
			});
		});

		describe('.toArrayInorder()', () => {

			it('should be in order', () => {
				const actual = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).toArrayInorder();
				const expected = [-1, 0, 0.5, 1, 1.5, 2, 3];
				assert.deepEqual(actual, expected);
			});
		});

		describe('.toArrayPreorder()', () => {

			it('should be in preorder', () => {
				const actual = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).toArrayPreorder();
				const expected = [1, 0, -1, 0.5, 2, 1.5, 3];
				assert.deepEqual(actual, expected);
			});
		});

		describe('.toArrayPostorder()', () => {

			it('should be in postorder', () => {
				const actual = new BinarySearchTree(1, 0, 2, -1, 0.5, 3, 1.5).toArrayPostorder();
				const expected = [-1, 0.5, 0, 1.5, 3, 2, 1];
				assert.deepEqual(actual, expected);
			});
		});
	});
});