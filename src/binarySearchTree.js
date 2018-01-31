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
	 * @param {TreeNode} node 
	 * @param {TreeNode} parentNode
	 */
	insert(node, parentNode) {
		if (!this.root)
			this.root = node;
		else if (!parentNode)
			return this.insert(node, this.root);
		else if (node.value > parentNode.value) {
			if (!parentNode.right) 
				parentNode.right = node;
			else 
				return this.insert(node, parentNode.right);
		} 
		else if (node.value < parentNode.value) {
			if (!parentNode.left) 
				parentNode.left = node;
			else 
				return this.insert(node, parentNode.left);
		}
		this.count ++;
		return this;
	}

	/**
	 * @param {TreeNode} node 
	 */
	remove(node, parentNode) {
		if (!this.root) 
			return this;
		else if (node === this.root)
			this.root = null;
		else if (!parentNode)
			return this.remove(node, this.root);
		else if (node === parentNode.right) {
			parentNode.right = null;
		}
		else if (node === parentNode.left) {
			parentNode.left = null;
		}
		else if (node.value > parentNode.value){
			return this.remove(node, parentNode.right);
		}
		else if (node.value < parentNode.value) {
			return this.remove(node, parentNode.left);
		}

		this.count --;
		return this;
	}
}

module.exports = BinarySearchTree;