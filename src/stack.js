'use strict';

const DoublyLinkedList = require('./doublyLinkedList');

class Stack {
	constructor(...values) {
		this._linkedList = new DoublyLinkedList(...values);
		updateCount(this, this._linkedList);
	}

	[Symbol.iterator]() {
		let stack = this;
		return {
			next() {
				const currentNode = stack.pop();
				const done = !currentNode;
				updateCount(stack, stack._linkedList);
				return { currentNode, done };
			}
		}
	}

	push(value) {
		this._linkedList.addLast(value);
		updateCount(this, this._linkedList);
		return this;
	}

	pop() {
		const node = this._linkedList.getFirst();
		this._linkedList.removeFirst();
		updateCount(this, this._linkedList);
		return node;
	}

	peek() {
		return this._linkedList.getFirst();
	}
}

const updateCount = (stack, linkedList) => stack.count = linkedList.count;

module.exports = Stack;