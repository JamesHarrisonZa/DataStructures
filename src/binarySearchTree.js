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
		if (value === this.root.value){
			this.root = null;
			this.count--;
		}	
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
}

const insertRecursive = (tree, currentNode, value) => {

	if (!tree.root)
		performInsert(tree, null, value);

	else if (value > currentNode.value) {
		if (!currentNode.right)
			performInsert(tree, currentNode, value);
		else
			insertRecursive(tree, currentNode.right, value);
	}
	else if (value < currentNode.value) {
		if (!currentNode.left)
			performInsert(tree, currentNode, value, true);
		else
			insertRecursive(tree, currentNode.left, value);
	}
};

const removeRecursive = (tree, currentNode, value) => {

	if (isSearchNode(currentNode.left, value))
		performRemove(tree, currentNode, true);
	if (isSearchNode(currentNode.right, value))
		performRemove(tree, currentNode);

	if (value > currentNode.value) {
		if (currentNode.right)
			return removeRecursive(tree, currentNode.right, value,);
		//Otherwise doesnt exist
	}
	else if (value < currentNode.value) {
		if (currentNode.left)
			return removeRecursive(tree, currentNode.left, value);
		//Otherwise doesnt exist
	}
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

const performInsert = (tree, parentNode, value, left) => {

	(!tree.root)
		? tree.root = new TreeNode(value)
		: (left)
			? parentNode.left = new TreeNode(value)
			: parentNode.right = new TreeNode(value);
	tree.count++;
};

const isSearchNode = (node, value) => node && node.value === value;

const hasNoChildren = (node) => !(node.left || node.right);

const hasOneChild = (node) => (node.left && !node.right) || (!node.left && node.right);

const performRemove = (tree, parentNode, left) => {

	const currentNode = (left) ? parentNode.left : parentNode.right;

	if (hasNoChildren(currentNode)) {
		(left)
			? parentNode.left = null
			: parentNode.right = null;
	}
	else if (hasOneChild(currentNode)) {
		if (!currentNode.right)
			(left)
				? parentNode.left = parentNode.left.left
				: parentNode.right = parentNode.right.left;
		else
			(left)
				? parentNode.left = parentNode.left.right
				: parentNode.right = parentNode.right.right;
	}
	else { //hasTwoChildren
		if (!hasRightTreeWithLeftNodes(currentNode))
			(left)
				? parentNode.left = parentNode.left.right
				: parentNode.right = parentNode.right.right;
		else {
			const leftMostNode = getNextBiggest(currentNode);
			(left)
				? parentNode.left = leftMostNode
				: parentNode.right = leftMostNode;
		}
	}
	tree.count--;
};

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

module.exports = BinarySearchTree;