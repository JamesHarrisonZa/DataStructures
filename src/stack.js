'use strict';

const DoublyLinkedList = require('./doublyLinkedList');

class Stack {
	constructor(...values) {
		this._linkedList = new DoublyLinkedList(...values);
		this.count = this._linkedList.count;
	}

	[Symbol.iterator]() {
		let stack = this;
		return {
			next() {
				const currentNode = stack.pop();

				const done = !currentNode;
				stack.count = stack._linkedList.count;
				return { currentNode, done };
			}
		}
	}

	push(value) {
		this._linkedList.addLast(value);
		this.count = this._linkedList.count;
		return this;
	}

	pop() {
		const node = this._linkedList.getFirst();
		this._linkedList.removeFirst();
		this.count = this._linkedList.count;
		return node;
	}

	peek() {
		return this._linkedList.getFirst();
	}
}

module.exports = Stack;