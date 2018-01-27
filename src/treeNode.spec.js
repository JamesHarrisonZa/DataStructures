'use strict';

const TreeNode = require('./treeNode');
const assert = require('assert');

describe('A TreeNode', () => {
	describe('set with a given value', () => {
		describe('.value', () => {
			it('should return that value', () => {
				const actual = new TreeNode(0).value;
				const expected = 0;
				assert.equal(actual, expected);
			});
		});
	});
});