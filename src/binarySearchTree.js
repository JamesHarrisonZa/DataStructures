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
	insert(value, currentNode) {
		if (!this.root)
			performInsert(this, value);
		else if (!currentNode)
			return this.insert(value, this.root);

		else if (value > currentNode.value) {
			if (!currentNode.right)
				performInsert(this, value, currentNode);
			else
				return this.insert(value, currentNode.right);
		}
		else if (value < currentNode.value) {
			if (!currentNode.left)
				performInsert(this, value, currentNode, true);
			else
				return this.insert(value, currentNode.left);
		}
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

		if (containsRecursive(value, this.root))
			return true;

		return false;
	}
}

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

const containsRecursive = (value, currentNode) => {
	if (isSearchNode(currentNode.right, value))
		return true;
	if (isSearchNode(currentNode.left, value))
		return true;
	
	if (value > currentNode.value) {
		if (currentNode.right)
			return containsRecursive(value, currentNode.right);
		//Otherwise doesnt exist
	}
	else if (value < currentNode.value) {
		if (currentNode.left)
			return containsRecursive(value, currentNode.left);
		//Otherwise doesnt exist
	}
};

const performInsert = (tree, value, parentNode, left) => {

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