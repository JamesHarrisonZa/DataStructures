'use strict';

const DoublyLinkedList = require('./doublyLinkedList');

class Queue extends DoublyLinkedList {
	constructor(...values) {
		super(...values);
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