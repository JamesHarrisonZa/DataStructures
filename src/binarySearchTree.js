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
	 * @param {TreeNode} parentNode
	 */
	insert(value, parentNode) {
		if (!this.root) {
			this.root = new TreeNode(value);
			this.count++;
		}
		else if (!parentNode)
			return this.insert(value, this.root);
		else if (value > parentNode.value) {
			if (!parentNode.right) {
				parentNode.right = new TreeNode(value);
				this.count++;
			}
			else 
				return this.insert(value, parentNode.right);
		} 
		else if (value < parentNode.value) {
			if (!parentNode.left) {
				parentNode.left = new TreeNode(value);
				this.count++;
			}
			else 
				return this.insert(value, parentNode.left);
		}
		return this;
	}

	/**
	 * @param {number} value
	 * @param {TreeNode} parentNode
	 */
	remove(value, parentNode) {
		if (!this.root) 
			return this;
		else if (value === this.root.value)
			this.root = null;
		else if (!parentNode)
			return this.remove(value, this.root);
		else if (parentNode.right && value === parentNode.right.value){
			parentNode.right = null;
			this.count--;
		} 
		else if (parentNode.left && value === parentNode.left.value) {
			parentNode.left = null;
			this.count--;
		}
		else if (value > parentNode.value) {
			if (parentNode.right)
				return this.remove(value, parentNode.right);
		}
		else if (value < parentNode.value) {
			return this.remove(value, parentNode.left);
		}
		return this;
	}
}

module.exports = BinarySearchTree;