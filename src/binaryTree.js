'use strict';

const TreeNode = require('./treeNode');

class BinaryTree {
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
	 */
	insert(node) {
		if (!this.root) {
			this.root = node;
		} else {
			if (node.value > this.root.value) this.root.right = node;
			if (node.value < this.root.value) this.root.left = node;
		}

		this.count ++;
		return this;
	}
}

module.exports = BinaryTree;