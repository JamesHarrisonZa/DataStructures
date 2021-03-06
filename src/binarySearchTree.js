'use strict';

const TreeNode = require('./treeNode');

class BinarySearchTree {
	/**
	 * @param {Enumerator<TreeNode>} nodes 
	 */
	constructor(...nodes) {
		this.root;
		this.count = 0;

		for (const node of nodes) {
			this.insert(node);
		}
	}

	/**
	 * @param {number} value
	 * @param {TreeNode} currentNode
	 * @return {BinarySearchTree}
	 */
	insert(value) {

		if (!this.root)
			performInsert(this, null, value);
		else 
			insertRecursive(this, this.root, value);
		return this;
	}

	/**
	 * @param {number} value
	 * @param {TreeNode} currentNode
	 * @return {BinarySearchTree}
	 */
	remove(value) {

		if (!this.root)
			return this;
		if (value === this.root.value)
			performRemove(this, null, this.root);	
		else
			removeRecursive(this, this.root, value);
		return this;
	}

	/**
	 * @param {number} value
	 * @return {boolean}
	 */
	contains(value) {

		if (!this.root) 
			return false;
		if (this.root.value === value) 
			return true;

		if (containsRecursive(this.root, value))
			return true;

		return false;
	}

	/**
	 * @param {number} value 
	 * @return {TreeNode}
	 */
	getNode(value) {

		return searchRecursive(this.root, value);
	}

	/**
	 * @return {Array<number>}
	 */
	toArrayInorder() {

		return traverseInorderRecursive(this.root, []);
	}

	/**
	 * @return {Array<number>}
	 */
	toArrayPreorder() {

		return traversePreorderRecursive(this.root, []);
	}

	/**
	 * @return {Array<number>}
	 */
	toArrayPostorder() {

		return traversePostorderRecursive(this.root, []);
	}
}

const insertRecursive = (tree, parentNode, value) => {

	if (value > parentNode.value) {
		if (!parentNode.right)
			performInsert(tree, parentNode, value);
		else
			insertRecursive(tree, parentNode.right, value);
	}
	else if (value < parentNode.value) {
		if (!parentNode.left)
			performInsert(tree, parentNode, value, true);
		else
			insertRecursive(tree, parentNode.left, value);
	}
};

const performInsert = (tree, parentNode, value, left) => {

	(!tree.root)
		? tree.root = new TreeNode(value)
		: (left)
			? parentNode.left = new TreeNode(value)
			: parentNode.right = new TreeNode(value);
	tree.count++;
};

const removeRecursive = (tree, parentNode, value) => {

	if (isSearchNode(parentNode.left, value))
		performRemove(tree, parentNode, parentNode.left, true);
	if (isSearchNode(parentNode.right, value))
		performRemove(tree, parentNode, parentNode.right);

	if (value > parentNode.value) {
		if (parentNode.right)
			return removeRecursive(tree, parentNode.right, value);
		//Otherwise doesnt exist
	}
	else if (value < parentNode.value) {
		if (parentNode.left)
			return removeRecursive(tree, parentNode.left, value);
		//Otherwise doesnt exist
	}
};

const isSearchNode = (node, value) => node && node.value === value;

const performRemove = (tree, parentNode, nodeToRemove, leftOfParent) => {

	if (hasNoChildren(nodeToRemove)) {
		updateReference(tree, parentNode, leftOfParent, null);
	}
	else if (hasOneChild(nodeToRemove)) {
		if (!nodeToRemove.right)
			updateReference(tree, parentNode, leftOfParent, nodeToRemove.left);
		else
			updateReference(tree, parentNode, leftOfParent, nodeToRemove.right);
	}
	else { //hasTwoChildren
		if (!hasRightTreeWithLeftNodes(nodeToRemove))
			updateReference(tree, parentNode, leftOfParent, nodeToRemove.right);
		else {
			const leftMostNode = getNextBiggest(nodeToRemove);
			updateReference(tree, parentNode, leftOfParent, leftMostNode);
		}
	}
	tree.count--;
};

const hasNoChildren = (node) => !(node.left || node.right);

const hasOneChild = (node) => (node.left && !node.right) || (!node.left && node.right);

const hasRightTreeWithLeftNodes = (node) => node.right.left;

const getNextBiggest = (node) => {
	
	let previousNode;
	let leftMostNode = node.right.left;
	while (leftMostNode.left) {
		previousNode = leftMostNode;
		leftMostNode = leftMostNode.left;
	}
	if (previousNode)
		previousNode.left = null;
	leftMostNode.left = node.left;
	leftMostNode.right = node.right;
	return leftMostNode;
}

const updateReference = (tree, parentNode, leftOfParent, value) => {

	if (!parentNode)
		tree.root = value;
	else
		(leftOfParent)
			? parentNode.left = value
			: parentNode.right = value;
};

const containsRecursive = (currentNode, value) => {
	if (isSearchNode(currentNode.right, value))
		return true;
	if (isSearchNode(currentNode.left, value))
		return true;

	if (value > currentNode.value) {
		if (currentNode.right)
			return containsRecursive(currentNode.right, value);
		//Otherwise doesnt exist
	}
	else if (value < currentNode.value) {
		if (currentNode.left)
			return containsRecursive(currentNode.left, value);
		//Otherwise doesnt exist
	}
};

const searchRecursive = (currentNode, value) => {

	if (!currentNode)
		return null;

	if (value < currentNode.value) 
		return searchRecursive(currentNode.left, value);
	if (value > currentNode.value)
		return searchRecursive(currentNode.right, value);

	if (isSearchNode(currentNode, value))
		return currentNode;
};

const traverseInorderRecursive = (currentNode, array) => {

	if (!currentNode) return array;

	traverseInorderRecursive(currentNode.left, array);
	array.push(currentNode.value);
	traverseInorderRecursive(currentNode.right, array);
	return array;
};

const traversePreorderRecursive = (currentNode, array) => {

	if (!currentNode) return array;

	array.push(currentNode.value);
	traversePreorderRecursive(currentNode.left, array);
	traversePreorderRecursive(currentNode.right, array);
	return array;
};

const traversePostorderRecursive = (currentNode, array) => {

	if (!currentNode) return array;

	traversePostorderRecursive(currentNode.left, array);
	traversePostorderRecursive(currentNode.right, array);
	array.push(currentNode.value);
	return array;
};

module.exports = BinarySearchTree;