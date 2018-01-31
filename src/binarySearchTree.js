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
	 */
	insert(node, parentNode) {
		if (!this.root)
			this.root = node;
		else if (!parentNode)
			return this.insert(node, this.root);
		else {
			if (node.value > parentNode.value) {
				if (!parentNode.right) 
					parentNode.right = node;
				else 
					return this.insert(node, parentNode.right);
			} 
			if (node.value < parentNode.value){
				if (!parentNode.left) 
					parentNode.left = node;
				else 
					return this.insert(node, parentNode.left);
			}
		}
		this.count ++;
		return this;
	}
}

module.exports = BinarySearchTree;