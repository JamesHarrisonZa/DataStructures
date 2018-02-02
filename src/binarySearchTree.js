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

const hasNoChildren = (node) => !(node.left || node.right);

const hasOneChild = (node) => (node.left && !node.right) || (!node.left && node.right);

const performRemoveLeft = (tree, parentNode) => {

	if (hasNoChildren(parentNode.left))
		parentNode.left = null;
	else if (hasOneChild(parentNode.left)) {
		if (!parentNode.left.right)
			parentNode.left = parentNode.left.left;
		else
			parentNode.left = parentNode.left.right;
	}
	else { //hasTwoChildren
		if (!parentNode.left.right.left)
			parentNode.left = parentNode.left.right;
		else 
			parentNode.left = parentNode.left.right.left;
	}
	tree.count--;
};

const performRemoveRight = (tree, parentNode) => {

	if (hasNoChildren(parentNode.right))
		parentNode.right = null;
	else if (hasOneChild(parentNode.right)) {
		if (!parentNode.right.right)
			parentNode.right = parentNode.right.left;
		else
			parentNode.right = parentNode.right.right;
	}
	else { //hasTwoChildren
		if (!parentNode.right.right.left)
			parentNode.right = parentNode.right.right;
		else 
			parentNode.right = parentNode.right.right.left;
	}
	tree.count--;
};

module.exports = BinarySearchTree;