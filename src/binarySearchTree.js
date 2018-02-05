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
			performRemove(this, null, this.root);
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

const insertRecursive = (tree, parentNode, value) => {

	if (!tree.root)
		performInsert(tree, null, value);

	else if (value > parentNode.value) {
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

const removeRecursive = (tree, parentNode, value) => {

	if (isSearchNode(parentNode.left, value))
		performRemove(tree, parentNode, parentNode.left, true);
	if (isSearchNode(parentNode.right, value))
		performRemove(tree, parentNode, parentNode.right);

	if (value > parentNode.value) {
		if (parentNode.right)
			return removeRecursive(tree, parentNode.right, value, );
		//Otherwise doesnt exist
	}
	else if (value < parentNode.value) {
		if (parentNode.left)
			return removeRecursive(tree, parentNode.left, value);
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

const performRemove = (tree, parentNode, nodeToRemove, leftOfParent) => {

	if (hasNoChildren(nodeToRemove)) {
		if (!parentNode) {
			tree.root = null;
		}
		else
			(leftOfParent)
				? parentNode.left = null
				: parentNode.right = null;
	}
	else if (hasOneChild(nodeToRemove)) {
		if (!nodeToRemove.right)
			(leftOfParent)
				? parentNode.left = parentNode.left.left
				: parentNode.right = parentNode.right.left;
		else
			(leftOfParent)
				? parentNode.left = parentNode.left.right
				: parentNode.right = parentNode.right.right;
	}
	else { //hasTwoChildren
		if (!hasRightTreeWithLeftNodes(nodeToRemove))
			(leftOfParent)
				? parentNode.left = parentNode.left.right
				: parentNode.right = parentNode.right.right;
		else {
			const leftMostNode = getNextBiggest(nodeToRemove);
			if (!parentNode) {
				tree.root = leftMostNode;
			}
			else
				(leftOfParent)
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