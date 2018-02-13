'use strict';

const DoublyLinkedList = require('./doublyLinkedList');

class Stack extends DoublyLinkedList {
	constructor(...values) {
		super(...values);
	}

	[Symbol.iterator]() {
		let stack = this;
		return {
			next() {
				const currentNode = stack.pop();
				const done = !currentNode;
				return { currentNode, done };
			}
		}
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

	peek() {
		return this.getFirst();
	}
}

module.exports = Stack;