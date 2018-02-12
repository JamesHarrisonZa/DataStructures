'use strict';

const DoublyLinkedList = require('./doublyLinkedList');

class Stack extends DoublyLinkedList {
	constructor(...values) {
		super(...values);
	}

	push(value) {
		this._linkedList.addLast(value);
	}

	pop() {
		const node = this._linkedList.getFirst();
		this._linkedList.removeFirst();
		return node;
	}
}

module.exports = Stack;