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
		if (!this.root) {
			this.root = new TreeNode(value);
			this.count++;
		}
		else if (!currentNode)
			return this.insert(value, this.root);
		else if (value > currentNode.value) {
			if (!currentNode.right) {
				currentNode.right = new TreeNode(value);
				this.count++;
			}
			else 
				return this.insert(value, currentNode.right);
		} 
		else if (value < currentNode.value) {
			if (!currentNode.left) {
				currentNode.left = new TreeNode(value);
				this.count++;
			}
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

		if (!this.root) return this;
		else if (value === this.root.value) this.root = null;
		else if (!currentNode) return this.remove(value, this.root);

		else if (isNodeToRemove(currentNode.left, value))
			performRemoveLeft(this, currentNode);
		else if (isNodeToRemove(currentNode.right, value))
			performRemoveRight(this, currentNode);
		
		else if (value > currentNode.value) {
			if (currentNode.right)
				return this.remove(value, currentNode.right);
		}
		else if (value < currentNode.value) {
			if (currentNode.left)
				return this.remove(value, currentNode.left);
		}
		return this;
	}
}

const isNodeToRemove = (node, value) => node && value === node.value;

const hasChildren = (node) => node.left || node.right;

const performRemoveLeft = (tree, currentNode) => {

	if (!hasChildren(currentNode.left))
		currentNode.left = null;
	else {
		if (!currentNode.left.right)
			currentNode.left = currentNode.left.left;
		else
			currentNode.left = currentNode.left.right;
	}
	tree.count--;
};

const performRemoveRight = (tree, currentNode) => {

	if (!hasChildren(currentNode.right))
		currentNode.right = null;
	else {
		if (!currentNode.right.right)
			currentNode.right = currentNode.right.left;
		else
			currentNode.right = currentNode.right.right;
	}
	tree.count--;
};

module.exports = BinarySearchTree;