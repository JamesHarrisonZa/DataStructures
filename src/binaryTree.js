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
	
	insert(node) {
		if (!this.root) this.root = node;
		this.count ++;
		return this;
	}
}

module.exports = BinaryTree;