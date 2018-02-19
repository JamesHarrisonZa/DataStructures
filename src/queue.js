'use strict';

const DoublyLinkedList = require('./doublyLinkedList');

class Queue {
	constructor(...values) {
		this._linkedList = new DoublyLinkedList(...values);
		this.count = this._linkedList.count;
	}

	[Symbol.iterator]() {
		let queue = this;
		return {
			next() {
				const currentNode = queue.dequeue();
				const done = !currentNode;
				queue.count = queue._linkedList.count;
				return { currentNode, done };
			}
		}
	}

	enqueue(value) {
		this._linkedList.addLast(value);
		this.count = this._linkedList.count;
		return this;
	}

	dequeue() {
		const first = this._linkedList.getFirst();
		this._linkedList.removeFirst();
		this.count = this._linkedList.count;
		return first;
	}
}

module.exports = Queue;