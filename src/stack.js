'use strict';

const DoublyLinkedList = require('./doublyLinkedList');

class Stack extends DoublyLinkedList {
	constructor(...values) {
		super(...values);
	}

	push(value) {
		this.addLast(value);
		return this;
	}

	pop() {
		const node = this.getFirst();
		this.removeFirst();
		return node;
	}
}

module.exports = Stack;