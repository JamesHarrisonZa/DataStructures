'use strict';

const TreeNode = require('./treeNode');

class BinaryTree {
	/**
	 * @param {Enumerator<TreeNode>} nodes 
	 */
	constructor(...nodes) {
		//this._root;
		this.count = 0;
		
		// for (const node of nodes) {
		// 	this.insert(node);
		// }
	}

	insert(node) {
		//this._root = node;
		this.count ++;
		return this;
	}
}

module.exports = BinaryTree;