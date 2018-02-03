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
	 */
	insert(value, currentNode) {
		if (!this.root) 
			performInsertRoot(this, value);
		else if (!currentNode) 
			return this.insert(value, this.root);
			
		else if (value > currentNode.value) {
			if (!currentNode.right) 
				performInsertRight(this, currentNode, value);
			else 
				return this.insert(value, currentNode.right);
		} 
		else if (value < currentNode.value) {
			if (!currentNode.left)
				performInsertLeft(this, currentNode, value);
			else 
				return this.insert(value, currentNode.left);
		}
		return this;
	}

	/**
	 * @param {number} value
	 * @param {TreeNode} currentNode
	 */
	remove(value, currentNode) {

		if (!this.root) 
			return this;
		else if (value === this.root.value) 
			this.root = null;
		else if (!currentNode) 
			return this.remove(value, this.root);

		else if (isNodeToRemove(currentNode.left, value))
			performRemove(this, currentNode, true);
		else if (isNodeToRemove(currentNode.right, value))
			performRemove(this, currentNode);
		
		else if (value > currentNode.value) {
			if (currentNode.right)
				return this.remove(value, currentNode.right);
			//Otherwise doesnt exist
		}
		else if (value < currentNode.value) {
			if (currentNode.left)
				return this.remove(value, currentNode.left);
			//Otherwise doesnt exist
		}
		return this;
	}
}
const performInsertRoot = (tree, value) => {
	tree.root = new TreeNode(value);
	tree.count++;
}

const performInsertLeft = (tree, parentNode, value) => {
	parentNode.left = new TreeNode(value);
	tree.count++;
};

const performInsertRight = (tree, parentNode, value) => {
	parentNode.right = new TreeNode(value);
	tree.count++;
};

const isNodeToRemove = (node, value) => node && value === node.value;

const hasNoChildren = (node) => !(node.left || node.right);

const hasOneChild = (node) => (node.left && !node.right) || (!node.left && node.right);

const performRemove = (tree, parentNode, left) => {

	const currentNode = (left) ? parentNode.left: parentNode.right;

	if (hasNoChildren(currentNode)){
		(left) ? parentNode.left = null: parentNode.right = null;
		
	}
	else if (hasOneChild(currentNode)) {
		if (!currentNode.right)
			(left) ? parentNode.left = parentNode.left.left: parentNode.right = parentNode.right.left;
		else
			(left) ? parentNode.left = parentNode.left.right: parentNode.right = parentNode.right.right;
	}
	else { //hasTwoChildren
		if (!currentNode.right.left)
			(left) ? parentNode.left = parentNode.left.right: parentNode.right = parentNode.right.right;
		else {
			let previousNode;
			let leftMostNode = currentNode.right.left;
			while (leftMostNode.left) {
				previousNode = leftMostNode;
				leftMostNode = leftMostNode.left;
			}
			if (previousNode) previousNode.left = null;
			leftMostNode.left = currentNode.left;
			leftMostNode.right = currentNode.right;
			(left) ? parentNode.left = leftMostNode: parentNode.right = leftMostNode;
		}
	}
	tree.count--;
};

module.exports = BinarySearchTree;