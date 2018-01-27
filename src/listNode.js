'use strict';

class ListNode {
	/**
	 * @param {any} value 
	 * @param {ListNode} next 
	 * @param {ListNode} previous
	 */
	constructor(value, next, previous) {
		this.value = value;
		this.next = next;
		this.previous = previous;
	}
}

module.exports = ListNode;