'use strict';

const DoublyLinkedList = require('./doublyLinkedList');

class Queue extends DoublyLinkedList {
	constructor(...values) {
		super(...values);
	}

	[Symbol.iterator]() {
		let queue = this;
		return {
			next() {
				const currentNode = queue.dequeue();
				const done = !currentNode;
				return { currentNode, done };
			}
		}
	}

	enqueue(value) {
		return this.addLast(value);
	}

	dequeue() {
		const first = this.getFirst();
		this.removeFirst();
		return first;
	}
}

module.exports = Queue;